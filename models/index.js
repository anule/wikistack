var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging:false
})

var Page = db.define('page', {
  title: { type: Sequelize.STRING, allowNull: false },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    //validate: { isUrl: true }}
  },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM('open', 'closed') },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
    }   
  },
  {
    getterMethods:{
      route() {
        this.urlTitle = '/wiki/' + this.urlTitle
        return this.urlTitle; 
      }
    }
  }

);

var User = db.define('user', {
  name: { type: Sequelize.STRING,
         allowNull: false,
        //  validate: {
        //   min: 2, 
        //   max:20
        //   } 
        },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};

//'lessons_in_programming'	'/wiki/lessons_in_programming'
// route as a getter that uses urlTitle and prepends the string '/wiki/' to it.