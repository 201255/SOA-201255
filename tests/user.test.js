const request = require('supertest');
const app = require('../app'); // Importa tu aplicación o módulo


describe('User Endpoint', () => {
  it('should create a new user', async () => {
    const newUser = {
      name: 'john_doe',
      email: 'john@example.com',
      pass: 'secure_password',
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).toBe(200); // Ajusta el código de estado según tu implementación
    // Puedes agregar más expectativas para verificar el contenido de la respuesta si es necesario
  });

  it('should handle invalid input', async () => {
    const invalidUser = {
      name: '',
      email: 'invalid_email',
      pass: 'password',
    };

    const response = await request(app)
      .post('/api/login')
      .send(invalidUser);

    expect(response.status).toBe(400); // Ajusta el código de estado según tu implementación
  });
});
