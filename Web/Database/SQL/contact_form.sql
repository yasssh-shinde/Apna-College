CREATE TABLE progress (
    id INT IDENTITY(1,1) PRIMARY KEY,
    topic VARCHAR(150),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'ongoing', 'completed')),
    category VARCHAR(20) CHECK (category IN ('DSA', 'Web')),
    date DATE
);
