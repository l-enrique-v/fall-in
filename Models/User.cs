namespace fall_in.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int  LocationId { get; set; }
        public int BranchId { get; set; }
        public string CoverImageUrl { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
