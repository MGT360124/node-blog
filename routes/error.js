const express = require("express");
const router = express.Router();
// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
// error handler
router.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = router;