import React, {useState} from 'react';
import mysql from 'mysql';

const List = (props) => {
  const [dbList, setDbList] = useState([]);

  const mysql_setting = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "list_app",
  };

  const connection = mysql.createConnection(mysql_setting);
  connection.connect();

  connection.query('select * from users', function (error, results, fields) {
    if (error) {
      throw error
    }
    setDbList(results);
  });

  return (
    <ul>
      {dbList.map(item => (
        <li key={item}>{item.name}</li>
      ))}
    </ul>
  )
};

export default List;