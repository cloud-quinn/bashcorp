using System;
using System.Linq;
using System.Web;

namespace BashCorp.Models
{
    public sealed class Skill
    {
        private readonly string description;
        private readonly string icon;
        private readonly string url;

        public Skill(string description, string icon, string url = null)
        {
            this.description = description;
            this.icon = icon;
            this.url = url;
        }


        public string Description
        {
            get
            {
                return description;
            }
        }
        public string Icon
        {
            get
            {
                return icon;
            }
        }
        public string Url
        {
            get
            {
                return url;
            }
        }
    }
}