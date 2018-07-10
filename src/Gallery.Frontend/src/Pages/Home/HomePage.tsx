import * as React from 'react'
import { Page } from 'pages'
import { Type, State, Mode, Style, Position } from 'controls'
import { Navbar } from 'controls/Navbar'
import { Container } from 'controls/Container'
import { NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarEnd, NavbarLink, NavbarDropdown, NavbarDivider, NavbarLinkItem } from 'controls/Navbar'
import { Section} from 'controls/Section'
import { Box } from 'controls/Box'
import { Field } from 'controls/Field'
import { Control } from 'controls/Control'
import { Search } from 'controls/Search'
import { Button } from 'controls/Button'
import { Image } from 'controls/Image'




export class HomePage extends Page<{name: string}> {
	
	public render() {
		return (
			<React.Fragment>
				<Navbar type={Type.White}>
					<Container>
						<NavbarBrand>
							<NavbarLinkItem to={'/'} text={<Image src={'https://dansup.github.io/bulma-templates/images/bulma.png'}/>}/>
							<NavbarBurger/>
						</NavbarBrand>
						<NavbarMenu>
							<NavbarEnd>
								<NavbarLinkItem to={'/'} text={'Home'} state={State.Active}/>
								<NavbarLinkItem to={'/examples'} text={'Examples'}/>
								<NavbarLinkItem to={'/features'} text={'Features'}/>
								<NavbarLinkItem to={'/team'} text={'Team'}/>
								<NavbarLinkItem to={'/archieves'} text={'Archieves'}/>
								<NavbarLinkItem to={'/help'} text={'Help'}/>
								<NavbarItem mode={Mode.Dropdown} style={Style.Hoverable}>
									<NavbarLink text={'Account'}/>
									<NavbarDropdown>
										<NavbarLinkItem to={'/dashboard'} text={'Dashdoard'}/>
										<NavbarLinkItem to={'/profile'} text={'Profile'}/>
										<NavbarLinkItem to={'/settings'} text={'Settings'}/>
										<NavbarDivider/>
										<NavbarLinkItem text={'Logout'}/>
									</NavbarDropdown>
								</NavbarItem>
							</NavbarEnd>
						</NavbarMenu>
					</Container>
				</Navbar>
				
				<Container>
					<Section>
						<Box>
							<Field mode={Mode.Addons}>
								<Control mode={Mode.Expanded}>
									<Search position={Position.TextCentered} placeholder={'find me'}/>
								</Control>
								<Control>
									<Button text={'Search'} type={Type.Info}/>
								</Control>
							</Field>
						</Box>

						<div className="row columns">
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img
												src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
												alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">Okinami</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Lead Developer</p>
											</div>
										</div>
										<div className="content">
											The Beast stumbled in the dark for it could no longer see the path. It started to fracture and
											weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes
											upon it, for it had become hideous and twisted.
											<div className="background-icon"><span className="icon-twitter"></span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/uzDLtlPY8kQ" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img
														src="https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024"
														alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">McSocks</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Developer</p>
											</div>
										</div>
										<div className="content">
											The soul of the Beast seemed lost forever. Then, by the full moon's light, a child was born; child
											with the unbridled soul of the Beast that would make all others pale in comparison.
											<div className="background-icon"><span className="icon-facebook"></span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/pe_R74hldW4" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="https://i.imgsafe.org/a5/a5e978ce20.jpeg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">The Conceptionist</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Developer</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam
											tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis
											totam! Labore reprehenderit beatae magnam animi!
											<div className="background-icon"><span className="icon-barcode"></span></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row columns is-multiline">
							<div className="column is-one-third">
								<div className="card large round">
									<div className="card-image ">
										<figure className="image">
											<img src="https://source.unsplash.com/Jy6luiLBsrk" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">Atsui</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com//i1CR3CY2hE4" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src='http://www.radfaces.com/images/avatars/richard-wang.jpg' alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">Sphirou Sapphirou</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/b6VzeoRZiS0" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src='http://www.radfaces.com/images/avatars/jeffrey-douglas.jpg' alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">PlayTheFallen</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Sometimes I dip my nose into my cereals. I do it coz it's funny.
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://i.imgsafe.org/a4/a4bda71ae4.jpeg" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/scrappy-doo.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">FelixCAT</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/ogYIzsNGu3Y" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/scrappy-doo.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">ScoobyDOG</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/KgjcndVr7tU" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/scrappy-doo.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">Scrappy Doo</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://i.imgsafe.org/a5/a5e978ce20.jpeg" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4">Prototyp3</p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/Gnxquq4oYQc" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4 no-padding">Alex Mack</p>
												<p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
							<div className="column is-one-third">
								<div className="card large">
									<div className="card-image">
										<figure className="image">
											<img src="https://source.unsplash.com/qbtyUQtqJ8k" alt="Image"/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												<figure className="image is-96x96">
													<img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image"/>
												</figure>
											</div>
											<div className="media-content">
												<p className="title is-4">Alex Mack</p>
												<p className="subtitle is-6">Moderator</p>
											</div>
										</div>
										<div className="content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
										</div>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</Container>

				<footer className="footer">
					<div className="container">
						<div className="content has-text-centered">
							<div className="soc">
								<a href="#"><i className="fa fa-github-alt fa-2x" aria-hidden="true"></i></a>
								<a href="#"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
								<a href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
								<a href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		)
	}
}