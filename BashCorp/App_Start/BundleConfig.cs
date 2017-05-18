using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace BashCorp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundle)
        {
            bundle.Add(new StyleBundle("~/Content/Essential.css").Include(
                "~/Content/bootstrap.css", 
                "~/Content/bootstrap-theme.css",
                "~/Content/Site.css"));

            bundle.Add(new Bundle("~/Content/Tertiary.css").Include(
                "~/css/font-awesome.css",
                "~/Content/Fonts.css"));

            bundle.Add(new ScriptBundle("~/Scripts/Essential.js").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/bootstrap.js"));

            bundle.Add(new ScriptBundle("~/Scripts/Tertiary.js").Include(
                "~/Scripts/Site.js"));

        }
    }
}
