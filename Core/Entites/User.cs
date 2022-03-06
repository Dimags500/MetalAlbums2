using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public  class User
    {

        public int Id { get; set; }
        public string UserName { get; set; }
        public UserRoles userRole{ get; set; }
        public string Password  { get; set; }

        //public byte[] PasswordHash { get; set; }
        //public byte[] PasswordSalt { get; set; }

    }
}
