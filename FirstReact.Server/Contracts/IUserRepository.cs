using System.Collections;
using FirstReact.Server;

namespace FirstReact.Contracts
{
    public interface IUserRepository
    {
        public Task<IEnumerable<User>> GetUsers();
    }
}