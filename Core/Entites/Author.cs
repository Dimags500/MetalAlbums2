﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Author : BaseEntity
    {
        public string Picture { get; set; }
        public List<Album> Albums { get; set; }
    }
}
