import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { RiGithubFill } from 'react-icons/ri';

function Social() {
  return (
    <div className="flex list-none items-end justify-center py-8">
      <ul className="flex flex-col gap-5 text-2xl text-[#d3d3d3] max-sm:flex-row">
        <li className="duration-200 hover:text-sky-500">
          <a
            target="_blank"
            href="https://twitter.com/callMeSaid_"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="duration-200 hover:text-sky-500">
          <a
            target="_blank"
            href="https://github.com/Saidelamy"
            rel="noopener noreferrer"
          >
            <RiGithubFill />
          </a>
        </li>
        <li className="duration-200 hover:text-sky-500">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/said-magdy-167874231/"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
