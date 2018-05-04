const Rpi = require('../models/rpi');
const Mc4 = require('../models/nodemc4');
const config = require('../config/database');

module.exports = (router) => {

    router.post('/rpi', (req, res) => {
        if (!req.body.keypad) {
            res.json({ success: false, message: 'keypad not found' })
        } else {
            if (!req.body.status) {
                res.json({ success: false, message: 'status not found' })
            } else {
                const data = new Rpi({
                    keypad: req.body.keypad,
                    status: req.body.status
                });
                data.save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({ success: false, message: err })
                    } else {
                        res.json({ success: true, message: 'data saved' });
                    }
                })
            }
        }
    });

    router.post('/mc4', (req, res) => {
        if(!req.body.sensordata){
            res.json({ success: false, message: 'sensor data not found' })
        }else{
            if(!req.body.solenoidvalue){
                res.json({ success: false, message:'solenoid value not found' })
            }else{
                const data = new Mc4({
                    sensordata: req.body.sensordata,
                    solenoidvalue: req.body.solenoidvalue
                });
                data.save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({ success: false, message: err })
                    } else {
                        res.json({ success: true, message: 'data saved' });
                    }
                })
            }
        }
    })

    router.get('/mc4data', (req, res) => {
        Mc4.find().select('sensordata solenoidvalue').exec((err, data) => {
            if (err) {
                res.json({ success: false, message: err })
            } else {
                if (!data) {
                    res.json({ success: false, message: 'no data available' })
                } else {
                    res.json({ success: true, data: data });
                }
            }
        })
    })

return router;
}