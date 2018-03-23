import * as React from 'react';
import { Menu } from 'semantic-ui-react';

interface State {
	activeItem: string;
}

class NavBar extends React.Component<{}, State> {
	state: State = { activeItem: 'home' };

	handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<Menu>
					<Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
					<Menu.Item name="projects" active={activeItem === 'projects'} onClick={this.handleItemClick} />
					<Menu.Item name="board" active={activeItem === 'boards'} onClick={this.handleItemClick} />
					<Menu.Menu position="right">
						<Menu.Item name="logout" active={false} onClick={this.handleItemClick} />
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default NavBar;
