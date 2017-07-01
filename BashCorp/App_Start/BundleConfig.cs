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
                "~/Content/bootstrap.css"));

            bundle.Add(new Bundle("~/Content/Tertiary.css").Include(
                "~/Content/bootstrap-theme.css",
                "~/Content/Site.css",
                "~/css/font-awesome.css",
                "~/Content/Fonts.css"));

            bundle.Add(new ScriptBundle("~/Scripts/Essential.js").Include(
                "~/Scripts/jquery-{version}.js"));

            bundle.Add(new ScriptBundle("~/Scripts/Tertiary.js").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/Site.js",
                "~/Scripts/lightbox.js"));

        }
    }
}
