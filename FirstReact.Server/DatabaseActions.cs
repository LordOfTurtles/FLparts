using System.Data;
using Dapper;
using MySql.Data.MySqlClient;

namespace FirstReact.Server

{
    static class FLpDatabase
    {
        static string connectionString = "Server=localhost; User ID=root; Database=SCB";
        static IDbConnection connection = new MySqlConnection(connectionString);
    }
}
