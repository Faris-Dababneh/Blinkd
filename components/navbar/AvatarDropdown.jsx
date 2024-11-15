'use client' 
// Directive to ensure the code runs on the client-side.

import React, { useEffect, useState } from "react";
// React imports for building the component and managing state.


import Link from "next/link";
// Provides client-side navigation for better user experience.


import { useSession, signOut } from "next-auth/react"; 
// NextAuth hooks for retrieving session data and logging out.


import { getUserProfile } from "../../app/database/Firebase";
// Firebase function to fetch user-specific profile data.


import { 
  Navbar, 
  NavbarContent, 
  Dropdown, 
  DropdownTrigger, 
  Avatar, 
  DropdownMenu, 
  DropdownItem, 
  DropdownSection 
} from "@nextui-org/react";

// NextUI components for creating styled and responsive navigation.

import { 
  MdOutlineSpaceDashboard, 
  MdOutlineSettings, 
  MdOutlineLogout, 
  MdOutlineHelp 
} from "react-icons/md";

// Material Design icons for visual enhancements.

function AvatarDropdown() {
  const { data: session } = useSession();
  
  // Fetch session details using NextAuth's `useSession`.

  const [userData, setUserData] = useState(null);
  
  const [loading, setLoading] = useState(true); // State to manage loading status.

  useEffect(() => {
    
    const fetchUserData = async () => {
      if (session) {
        try {
          setLoading(true); 
          // Set loading to true while data is being fetched.
          const data = await getUserProfile(session);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false); 
          // Ensure loading is set to false after fetching.
          
        }
      }
    };

    fetchUserData();
  }, [session]);

  const handleLogout = () => {
    signOut(); 
    // Trigger logout using NextAuth's `signOut`.
  };

  return (
    
    <Navbar>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name={session?.user?.name || "Guest"}
              size="sm"
              src={session?.user?.image || "/default-avatar.png"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {loading ? (
              <DropdownItem key="loading" className="h-14 gap-2">
                <p>Loading...</p>
              </DropdownItem>
            ) : (
              <>
                <DropdownSection showDivider>
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">
                      {userData?.displayName || session?.user?.name || "Guest"}
                    </p>
                    <p className="text-gray-500">
                      {session?.user?.email || "Email not available"}
                    </p>
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider>
                  <DropdownItem
                    key="dashboard"
                    startContent={<MdOutlineSpaceDashboard size={20} />}
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownItem>
                  <DropdownItem
                    key="settings"
                    startContent={<MdOutlineSettings size={20} />}
                  >
                    <Link href="/settings">Settings</Link>
                  </DropdownItem>
                  <DropdownItem
                    key="help"
                    startContent={<MdOutlineHelp size={20} />}
                  >
                    <Link href="/help">Help</Link>
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  key="logout"
                  color="danger"
                  startContent={<MdOutlineLogout size={20} />}
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </>
            )}
            
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default AvatarDropdown;

/**
 * Review:
 * 
 * This updated implementation showed very enhanced functionality, including error handling, 
 * loading states, and additional dropdown options. It builds on a clean and scalable design, 
 * integrating Next.js and NextAuth seamlessly for authentication and session management.
 * 
 * The addition of a loading state improves user experience, while including more 
 * dropdown items (like "Help") adds versatility. Error handling ensures resilience, 
 * making the app robust for edge cases. Detailed comments throughout the code improve
 * readability and maintainability for future developers.
 * 
 * This project is going very well! I believe it shows how thoughtful you are in design and functionality. I’m proud of how
 * each part complements the rest to deliver a polished user experience. 
 */
