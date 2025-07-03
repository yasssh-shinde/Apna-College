-- Get all users
SELECT * FROM users;

-- Get all blogs by a user
SELECT * FROM blogs WHERE author_id = 1;

-- Join blogs with users
SELECT blogs.title, users.name
FROM blogs
JOIN users ON blogs.id = users.id;

-- Count completed progress tasks
SELECT COUNT(*) FROM progress WHERE status = 'completed';
