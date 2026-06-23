// Task 1. Data Generation
    db.books.insertMany([
        { title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 35, in_stock: true, published_year: 2008, rating: 4.8 },
        { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", price: 42, in_stock: true, published_year: 2019, rating: 4.7 },
        { title: "Refactoring", author: "Martin Fowler", category: "Programming", price: 47, in_stock: true, published_year: 2018, rating: 4.6 },
        { title: "Code Complete", author: "Steve McConnell", category: "Programming", price: 38, in_stock: true, published_year: 2004, rating: 4.5 },
        { title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", price: 30, in_stock: true, published_year: 2020, rating: 4.4 },
        { title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Programming", price: 28, in_stock: false, published_year: 2018, rating: 4.3 },
        { title: "Python Crash Course", author: "Eric Matthes", category: "Programming", price: 33, in_stock: true, published_year: 2023, rating: 4.7 },
        { title: "Fluent Python", author: "Luciano Ramalho", category: "Programming", price: 50, in_stock: true, published_year: 2022, rating: 4.8 },
        { title: "Effective Java", author: "Joshua Bloch", category: "Programming", price: 45, in_stock: true, published_year: 2018, rating: 4.7 },
        { title: "The Clean Coder", author: "Robert C. Martin", category: "Programming", price: 32, in_stock: true, published_year: 2011, rating: 4.5 },
        { title: "Programming Rust", author: "Jim Blandy", category: "Programming", price: 55, in_stock: true, published_year: 2021, rating: 4.6 },
        { title: "Go in Action", author: "William Kennedy", category: "Programming", price: 39, in_stock: false, published_year: 2015, rating: 4.2 },

        { title: "Database Internals", author: "Alex Petrov", category: "Databases", price: 48, in_stock: true, published_year: 2019, rating: 4.7 },
        { title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", category: "Databases", price: 52, in_stock: true, published_year: 2017, rating: 4.9 },
        { title: "SQL Performance Explained", author: "Markus Winand", category: "Databases", price: 36, in_stock: true, published_year: 2012, rating: 4.5 },
        { title: "Seven Databases in 7 Weeks", author: "Luc Perkins", category: "Databases", price: 41, in_stock: true, published_year: 2018, rating: 4.3 },
        { title: "MongoDB: The Definitive Guide", author: "Shannon Bradshaw", category: "Databases", price: 44, in_stock: true, published_year: 2019, rating: 4.4 },
        { title: "Learning SQL", author: "Alan Beaulieu", category: "Databases", price: 38, in_stock: true, published_year: 2020, rating: 4.4 },
        { title: "PostgreSQL Up and Running", author: "Regina Obe", category: "Databases", price: 34, in_stock: false, published_year: 2017, rating: 4.2 },

        { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: 22, in_stock: true, published_year: 1988, rating: 4.6 },
        { title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 25, in_stock: true, published_year: 1976, rating: 4.5 },
        { title: "Cosmos", author: "Carl Sagan", category: "Science", price: 24, in_stock: true, published_year: 1980, rating: 4.7 },
        { title: "Sapiens", author: "Yuval Noah Harari", category: "Science", price: 28, in_stock: true, published_year: 2011, rating: 4.6 },
        { title: "The Gene", author: "Siddhartha Mukherjee", category: "Science", price: 30, in_stock: true, published_year: 2016, rating: 4.5 },
        { title: "Astrophysics for People", author: "Neil deGrasse Tyson", category: "Science", price: 20, in_stock: true, published_year: 2017, rating: 4.4 },

        { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", price: 18, in_stock: true, published_year: 1937, rating: 4.8 },
        { title: "1984", author: "George Orwell", category: "Fiction", price: 16, in_stock: true, published_year: 1949, rating: 4.7 },
        { title: "Brave New World", author: "Aldous Huxley", category: "Fiction", price: 17, in_stock: true, published_year: 1932, rating: 4.5 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", category: "Fiction", price: 15, in_stock: true, published_year: 1953, rating: 4.4 },

        { title: "The Lean Startup", author: "Eric Ries", category: "Business", price: 27, in_stock: true, published_year: 2011, rating: 4.3 }
        ]);

    db.books.countDocuments();

// Task 2. CRUD Operations
// CREATE
    db.books.insertMany([
        { title: "The Mythical Man-Month", author: "Frederick Brooks", category: "Programming", price: 29, in_stock: true, published_year: 1975, rating: 4.4 },
        { title: "Domain-Driven Design", author: "Eric Evans", category: "Programming", price: 49, in_stock: true, published_year: 2003, rating: 4.5 },
        { title: "Redis in Action", author: "Josiah Carlson", category: "Databases", price: 40, in_stock: true, published_year: 2013, rating: 4.2 },
        { title: "Thinking Fast and Slow", author: "Daniel Kahneman", category: "Business", price: 26, in_stock: true, published_year: 2011, rating: 4.6 },
        { title: "Dune", author: "Frank Herbert", category: "Fiction", price: 21, in_stock: true, published_year: 1965, rating: 4.8 }
        ]);

    db.books.countDocuments();


// READ
// all books in the "Programming" category
    db.books.find({ category: "Programming" });

// books published after 2015
    db.books.find({ published_year: { $gt: 2015 } });

// books priced above $40
    db.books.find({ price: { $gt: 40 } });

// books currently in stock
    db.books.find({ in_stock: true });

// books written by a specific author
    db.books.find({ author: "Robert C. Martin" });

// books with a rating greater than 4.5
    db.books.find({ rating: { $gt: 4.5 } });


// UPDATE
// change the price of a book
    db.books.updateOne(
        { title: "Clean Code" },
        { $set: { price: 39 } }
        );

// update stock availability (this book was out of stock -> now available)
    db.books.updateOne(
        { title: "Eloquent JavaScript" },
        { $set: { in_stock: true } }
        );

// increase the rating of a selected book
    db.books.updateOne(
        { title: "Go in Action" },
        { $inc: { rating: 0.2 } }
        );

// DELETE
    db.books.deleteOne({ title: "Fahrenheit 451" });
    db.books.deleteOne({ title: "PostgreSQL Up and Running" });

    db.books.countDocuments();

// Task 3. Aggregation Framework
// average book price per category
    db.books.aggregate([
        { $group: { _id: "$category", avgPrice: { $avg: "$price" } } },
        { $sort: { avgPrice: -1 } }
        ]);

// number of books per category
    db.books.aggregate([
        { $group: { _id: "$category", totalBooks: { $sum: 1 } } },
        { $sort: { totalBooks: -1 } }
        ]);

// average rating per category
    db.books.aggregate([
        { $group: { _id: "$category", avgRating: { $avg: "$rating" } } },
        { $sort: { avgRating: -1 } }
        ]);

// top 5 most expensive books
    db.books.aggregate([
        { $sort: { price: -1 } },
        { $limit: 5 },
        { $project: { _id: 0, title: 1, author: 1, price: 1 } }
        ]);

// Task 4. MongoDB Query Optimization
// Step 1. Analyze Query Performance
    db.books.find({
        category: "Programming",
        published_year: { $gte: 2020 }
        }).explain("executionStats");


// Step 2. Create an Index
    db.books.createIndex({
        category: 1,
        published_year: 1
        });

    db.books.getIndexes();


// Step 3. Re-run Performance Analysis
    db.books.find({
        category: "Programming",
        published_year: { $gte: 2020 }
        }).explain("executionStats");
