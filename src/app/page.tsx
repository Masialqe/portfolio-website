import { UserRole } from "@/core/auth/roles";
import { auth } from "@/lib/auth";
import "@/styles/pages/web.css";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isCreator = session?.user.role === UserRole.CREATOR;
  const isAdmin = session?.user.role === UserRole.ADMIN;

  return (
    <div className="web-container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/customer">Customer</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            {isCreator && (
              <li>
                <a href="/creator">Creator</a>
              </li>
            )}

            {isAdmin && (
              <li>
                <a href="/admin">Manage</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main></main>
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
