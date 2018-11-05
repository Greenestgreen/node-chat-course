const expect = require('expect');
const {Users} = require('./user');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name:'greeN',
      room: 'Node Course'
    }, {
      id:'2',
      name:'klash',
      room: 'React Course'
    }, {
      id:'3',
      name:'yutroc',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name:'GreeN',
      room:'Nine Nine'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);

  });

  it('should find the user',() => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find the user', () => {
    var userId = '33';
    var user = users.getUser(userId);

    expect(user).toNotExist();


  });


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['greeN','yutroc']);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['klash']);
  });

});
