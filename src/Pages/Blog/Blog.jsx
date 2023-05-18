/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='mt-12 p-12 md:p-0'>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>1 . What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans :</span> <br />Access Token:
                    <br />
                    An access token is a credential that is issued by an authentication server upon successful authentication of a user. It represents the users authorization to access protected resources or perform certain actions.
                    <br />
                    Access tokens are typically short-lived and have an expiration time. They are used to authenticate API requests by including them in the request headers or as query parameters.
                    <br />
                    The server validates the access token for each request to ensure that the user has the necessary permissions to access the requested resource.
                    <br />
                    <br />
                    Refresh Token:
                    <br />
                    A refresh token is a long-lived credential that is also issued during the authentication process along with the access token.
                    <br />
                    Unlike access tokens, refresh tokens are not included in API requests. Instead, they are used to obtain new access tokens once the previous access token expires.
                    <br />
                    When the access token expires, the client sends the refresh token to the server. The server verifies the refresh token and issues a new access token without requiring the user to reauthenticate.
                    <br />
                    Refresh tokens typically have a longer expiration time and can be revoked by the authentication server if necessary (e.g., if the users account is compromised).
                    <br />
                    <br />
                    Storage on the Client-side:
                    <br />
                    Access tokens are usually stored on the client-side, commonly in memory or local storage of the users browser.
                    <br />
                    It is important to store access tokens securely to prevent unauthorized access. Using secure storage mechanisms like HTTP-only cookies or browsers built-in storage mechanisms (e.g., sessionStorage) can help protect access tokens from cross-site scripting (XSS) attacks.
                    <br />
                    Refresh tokens, being long-lived and more sensitive, should be stored securely. One recommended approach is to store them in an HTTP-only cookie with the Secure and SameSite attributes set appropriately.
                    <br />
                    Storing tokens securely helps mitigate the risk of token theft and unauthorized access to user data.
                    <br />
                    <br />
                </p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>2 .Compare SQL and NoSQL databases?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans :</span> <br />Data Model:
                    <br />
                    SQL: SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using primary and foreign keys.
                    <br />
                    NoSQL: NoSQL databases use various data models, such as key-value pairs, documents, columnar, or graph-based models. They provide flexibility in storing unstructured or semi-structured data without strict schemas or predefined relationships.
                    <br />
                    <br />
                    Scalability:
                    <br />
                    SQL: SQL databases are generally vertically scalable, meaning they scale by increasing the hardware resources of a single server. They are suitable for applications with structured data and consistent transactional requirements.
                    <br />
                    NoSQL: NoSQL databases are designed to be horizontally scalable, allowing them to distribute data across multiple servers or nodes. They excel at handling large volumes of data and high-velocity workloads.
                    <br />
                    <br />
                    Query Language:
                    <br />
                    SQL: SQL databases use the SQL language for defining and manipulating data. SQL provides a rich set of declarative querying capabilities, including filtering, joining, aggregating, and sorting data.
                    <br />
                    NoSQL: NoSQL databases may have their query languages specific to their data models. Some NoSQL databases offer query languages similar to SQL, while others provide APIs for accessing and manipulating data.
                    <br />
                    <br />
                    Schema Flexibility:
                    <br />
                    SQL: SQL databases enforce a fixed schema, meaning the structure of the data must be defined before storing it. Altering the schema often requires modifying existing data and can be challenging in production environments.
                    <br />
                    NoSQL: NoSQL databases offer schema flexibility, allowing developers to store and retrieve data without a predefined schema. This makes it easier to handle evolving data requirements and accommodate changes in application needs.
                    <br />
                    <br />
                    ACID Transactions:
                    <br />
                    SQL: SQL databases generally provide ACID (Atomicity, Consistency, Isolation, Durability) transactions, ensuring data integrity and reliability. They are suitable for applications that require strict consistency and transactional guarantees.
                    <br />
                    NoSQL: NoSQL databases often prioritize availability and scalability over strict consistency. They may provide eventual consistency or relaxed transactional guarantees, making them suitable for scenarios where high availability and partition tolerance are crucial.
                    <br />
                    <br />
                    Use Cases:
                    <br />
                    SQL: SQL databases are commonly used for applications with structured data and complex relationships, such as traditional relational data, financial systems, e-commerce platforms, and content management systems.
                    <br />
                    NoSQL: NoSQL databases are well-suited for applications with large amounts of unstructured or semi-structured data, real-time analytics, high-velocity data ingestion, content caching, IoT applications, and handling rapidly changing data models.
                    <br />
                    <br />
                </p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>3 .What is express js? What is Nest JS?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans : </span>  <br />Express.js:
                    <br />
                    Express.js is a minimalist web framework for building web applications and APIs using Node.js. It provides a simple and unopinionated approach to web development, allowing developers to create robust and scalable server-side applications.
                    <br />
                    With Express.js, you can handle HTTP requests, define routes, and perform various middleware operations for request processing, such as authentication, error handling, and data parsing.
                    <br />
                    Express.js is known for its flexibility, simplicity, and a large ecosystem of middleware and extensions that can be easily integrated. It is often the go-to choice for developers who prefer a lightweight framework with more control over their applications architecture.
                    <br />
                    <br />
                    Nest.js:
                    <br />
                    Nest.js is a progressive, opinionated web application framework for building efficient and scalable server-side applications using TypeScript. It combines elements of object-oriented programming, functional programming, and the concept of modules to provide a robust foundation for building complex applications.
                    <br />
                    Nest.js is built on top of Express.js, leveraging its features and middleware ecosystem. However, it adds additional features, such as dependency injection, decorators, and strong typing with TypeScript, which enable developers to write more structured and maintainable code.
                    <br />
                    Nest.js promotes modular development and follows a modular architecture pattern, allowing developers to organize their application into reusable and loosely coupled modules.
                    <br />
                    It also provides built-in support for features like routing, authentication, caching, database integration (via TypeORM or other libraries), and more, making it suitable for building large-scale enterprise applications.
                    <br />
                </p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>4 . What is MongoDB aggregate and how does it work?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans : </span>  <br />Matching Stage ($match):
                    <br />
                    The $match stage is optional and filters the documents in the collection based on specified conditions.
                    <br />
                    It uses MongoDBs query language to define the criteria for selecting documents.
                    <br />
                    <br />
                    Grouping Stage ($group):
                    <br />
                    The $group stage groups the documents based on a specified key or keys.
                    <br />
                    It allows you to perform aggregation operations like counting, summing, averaging, and more on grouped data.
                    <br />
                    Aggregation operators like $sum, $avg, $max, $min, $push, etc., can be used within the $group stage.
                    <br />
                    <br />
                    Projection Stage ($project):
                    <br />
                    The $project stage allows you to reshape or transform the documents by selecting specific fields or including calculated fields.
                    <br />
                    It uses a projection object to specify the fields to include or exclude, or to create new calculated fields using expressions.
                    <br />
                    <br />
                    Sorting Stage ($sort):
                    <br />
                    The $sort stage sorts the documents based on specified sort criteria.
                    <br />
                    It can sort documents based on one or more fields in ascending or descending order.
                    <br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default Blog;