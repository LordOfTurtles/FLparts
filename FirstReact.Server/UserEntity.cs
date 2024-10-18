using System.ComponentModel.DataAnnotations;

namespace FirstReact
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Email { get; set; }

    }
}
