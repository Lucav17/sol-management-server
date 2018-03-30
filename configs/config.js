module.exports = {
    PORT: process.env.PORT || 3000,
    DATABASE: process.env.DATABASE || 'mongodb://root:pass@ds229609.mlab.com:29609/sol-management',
    SECRET_KEY: process.env.SECRET_KEY || 'sol_secret_key'
};