import { Logo } from './icons/Logo';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guides</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/test/introduction">Introduction</NavLink>
            <NavLink href="/test/quick-start">QuickStart</NavLink>
            <NavLink href="/test/sdks">SDKs</NavLink>
            <NavLink href="/test/authentication">Authentication</NavLink>
            <NavLink href="/test/pagination">Pagination</NavLink>
            <NavLink href="/test/erros">Erros</NavLink>
            <NavLink href="/test/webhooks">Webhooks</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="text-sm flex  flex-col pl-2">
            <NavLink href="/test/contacts">Contacts</NavLink>
            <NavLink href="/test/conversations">Conversations</NavLink>
            <NavLink href="/test/messages">Messages</NavLink>
            <NavLink href="/test/groups">Groups</NavLink>
            <NavLink href="/test/attachments">Attachments</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}
