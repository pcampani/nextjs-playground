import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
	display: grid;
	ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		justify-content: space-between;
	}
`;

export default function Navbar() {
	return (
		<Nav>
			<ul>
				<li><Link href='/'><a title='Home'>Home</a></Link></li>
				<li><Link href='/about'><a title='About'>About</a></Link></li>
				<li><Link href='/blog'><a>Blog</a></Link></li>
				<li><Link href='/message'><a>Message</a></Link></li>
			</ul>
		</Nav>
	)
}