const express = require('express');
const router = express.Router();
let KindOfRoom = require('../../models/kind-of-room.model');

// @route    GET api/kind-of-rooms
// @desc     get all kind-of-room
// @access   Public
// Lấy tất cả phòng
router.get('/', async (req, res) => {
    try {
        const kindOfRoom = await KindOfRoom.find();

        return res.status(200).json(kindOfRoom);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;
