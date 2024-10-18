using System.Data;
using Dapper;
using FirstReact.Server;
using MySql.Data.MySqlClient;
using Mysqlx.Resultset;

namespace FirstReact.Server

{
    static class FLpDatabase
    {
        static string connectionString = "Server=localhost; User ID=root; Database=flparts";
        static IDbConnection connection = new MySqlConnection(connectionString);

        public static List<User> GetAllUsers()
        {
            string sql = "SELECT UserID, FirstName, LastName, Email" +
            "FROM Users";
            
            return connection.Query<User>(sql).ToList();
        }
    }
}
