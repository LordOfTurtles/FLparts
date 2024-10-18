using System.Data;
using MySql.Data.MySqlClient;

namespace FirstReact.Context
{
    public class DapperContext
    {
        private readonly IConfiguration _configuration;
        private readonly string? _connectionString;
        public DapperContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("SqlConnection");
        }

        public IDbConnection CreateConnection() => new MySqlConnection(_connectionString);
    }
}