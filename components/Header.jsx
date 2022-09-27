import Image from 'next/image';
import HeaderItem from './HeaderItem.jsx';
import {
  CheckBadgeIcon,
  CircleStackIcon, 
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="flex flex-col m-5 justify-between items-center h-auto
                      sm:flex-row">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={BoltIcon} />
          <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
          <HeaderItem title='COLLECTIONS' Icon={CircleStackIcon} />
          <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
        />
    </header>
  );
}

export default Header;