const express = require('express');
const { createBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', auth, createBlog);
router.get('/:id', getSingleBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
