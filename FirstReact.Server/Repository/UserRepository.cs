using Dapper;
using FirstReact.Context;
using FirstReact.Contracts;
using FirstReact.Server;

namespace FirstReact.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DapperContext _context;

        public UserRepository(DapperContext context) => _context = context;

        public async Task<IEnumerable<User>> GetUsers()
        {
            var query = "SELECT * FROM Users";

            using (var connection = _context.CreateConnection())
            {
                var users = await connection.QueryAsync<User>(query);

                return users.ToList();
            }
        }
    }
}