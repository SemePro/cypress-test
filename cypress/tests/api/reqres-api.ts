import { ApiHelper } from '../../support/ApiHelper';

describe('Reqres API Tests', () => {

  // GET: List Users
  it('GET - List Users', () => {
    ApiHelper.get('/users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page', 2);
      expect(response.body.data).to.have.length(6);
    });
  });

  // GET: Single User
  it('GET - Single User', () => {
    ApiHelper.get('/users/2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', 2);
      expect(response.body.data).to.have.property('email', 'janet.weaver@reqres.in');
    });
  });

  // GET: Single User Not Found (expecting 404)
  it('GET - Single User Not Found', () => {
    ApiHelper.get('/users/23', false).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  // POST: Create User
  it('POST - Create User', () => {
    const newUser = {
      name: 'morpheus',
      job: 'leader'
    };

    ApiHelper.post('/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', newUser.name);
      expect(response.body).to.have.property('job', newUser.job);
    });
  });

  // POST: Register Successful
  it('POST - Register Successful', () => {
    const registerUser = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };

    ApiHelper.post('/register', registerUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
    });
  });

  // POST: Register Unsuccessful (expecting 400)
  it('POST - Register Unsuccessful', () => {
    const registerUser = {
      email: 'sydney@fife'
    };

    ApiHelper.post('/register', registerUser, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });

  // POST: Login Successful
  it('POST - Login Successful', () => {
    const loginUser = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };

    ApiHelper.post('/login', loginUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  // POST: Login Unsuccessful (expecting 400)
  it('POST - Login Unsuccessful', () => {
    const loginUser = {
      email: 'peter@klaven'
    };

    ApiHelper.post('/login', loginUser, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });

  // PUT: Update User
  it('PUT - Update User', () => {
    const updatedUser = {
      name: 'morpheus',
      job: 'zion resident'
    };

    ApiHelper.put('/users/2', updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', updatedUser.name);
      expect(response.body).to.have.property('job', updatedUser.job);
    });
  });

  // DELETE: Delete User
  it('DELETE - Delete User', () => {
    ApiHelper.delete('/users/2').then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
