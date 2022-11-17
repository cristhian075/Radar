module.exports = {

    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb+srv://admin:admin@radar.wsax7ii.mongodb.net/?retryWrites=true&w=majority',
    SECRET_KEY: 'secret_key',
    directory:__dirname,
    admin_email: 'admin@correo',
    admin_password: 'admin'

}
