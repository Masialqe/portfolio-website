//styles
import "@/styles/pages/admin.css";

//icons
import SettingsSuggestIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GroupIcon from "@mui/icons-material/Group";
import CollectionsIcon from "@mui/icons-material/Collections";
import EuroIcon from "@mui/icons-material/Euro";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

//components
import OverviewPanel from "@/components/admin/panels/OverviewPanel";
import PricingPanel from "@/components/admin/panels/PricingPanel";
import GalerryPanel from "@/components/admin/panels/GalerryPanel";
import UsersPanel from "@/components/admin/panels/UsersPanel";
import StatisticsPanel from "@/components/admin/panels/StatisticsPanel";
import SettingsPanel from "@/components/admin/panels/SettingsPanel";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UserRole } from "@/core/auth/roles";

interface Props {
  searchParams: { panel?: string };
}

enum Panel {
  Overview = "overview",
  Pricing = "pricing",
  Gallery = "gallery",
  Users = "users",
  Statistics = "statistics",
  Settings = "settings",
}

const panelComponents: Record<Panel, React.ReactNode> = {
  [Panel.Overview]: <OverviewPanel />,
  [Panel.Pricing]: <PricingPanel />,
  [Panel.Gallery]: <GalerryPanel />,
  [Panel.Users]: <UsersPanel />,
  [Panel.Statistics]: <StatisticsPanel />,
  [Panel.Settings]: <SettingsPanel />,
};

const page = async ({ searchParams }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== UserRole.ADMIN) {
    return redirect("/error");
  }

  const panel: Panel = Object.values(Panel).includes(
    searchParams.panel as Panel
  )
    ? (searchParams.panel as Panel)
    : Panel.Overview;

  return (
    <>
      <div className="admin-container">
        <aside>
          <nav>
            <ul>
              <li className={panel === Panel.Overview ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Overview}`}>
                  <InfoOutlineIcon />
                  Overview
                </a>
              </li>
              <li className={panel === Panel.Pricing ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Pricing}`}>
                  <EuroIcon />
                  Pricing
                </a>
              </li>
              <li className={panel === Panel.Gallery ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Gallery}`}>
                  <CollectionsIcon />
                  Gallery
                </a>
              </li>
              <li className={panel === Panel.Users ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Users}`}>
                  <GroupIcon />
                  Users
                </a>
              </li>
              <li className={panel === Panel.Statistics ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Statistics}`}>
                  <QueryStatsIcon />
                  Statistics
                </a>
              </li>
              <li className={panel === Panel.Settings ? "active-link" : ""}>
                <a href={`/admin?panel=${Panel.Settings}`}>
                  <SettingsSuggestIcon />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>{panelComponents[panel]}</main>
      </div>
    </>
  );
};

export default page;
