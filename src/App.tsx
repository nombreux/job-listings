import { ReactNode, useState } from 'react';
import { Chip, createTheme, ThemeProvider } from "@mui/material";
import './App.css';
import styled from '@emotion/styled';
import Header, { EyeCamCoIcon } from './asset/SVG';
import { css } from '@emotion/css';
import { JsxElement } from 'typescript';
import jobListingData from './data';
import { padding } from '@mui/system';



const theme = createTheme({
	palette: {
		secondary: {
			main: 'hsl(180, 31%, 95%)',
			contrastText:'hsl(180, 14%, 20%)'
		},
		primary: {
			main: 'hsl(180, 29%, 50%)',
		}

	},
	typography: {
		fontFamily: 'League Spartan',

	},


})

const FlexColoum = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '30px',
	marginBottom: '50px'


})


const FlexCard = styled.div({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	alignContent: 'center',
	boxShadow: '0px 2px 15px 0px rgb(0 131 107 / 40%)',
	height: 'auto',
	width: '80vw',
	borderRadius: '10px',


	padding: '10px',
	// background: 'hsl(180deg 100% 95% / 58%)',
	background: 'white',

	'@media(max-width:375px)': {
		flexDirection: 'column',
		alignContent: 'flex-start',
		alignItems: 'flex-start',
	}
})

// const 

const IconCircle = styled.div({
	padding: '5px',
	'@media(max-width:375px)': {
		marginTop: '-60px',
		marginLeft: '-30px',
		transform: 'scale(0.5)'


	}
})

const Description = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'flex-start',
	alignItems: 'flex-start',
	gap: '10px',
	'@media(max-width:375px)': {
		gap: '15px',
		marginTop: '-20px'
	}

})

const Border = styled.div({
	'@media(max-width:375px)': {
		width: '100%',
		height: '1px',
		background: 'hsl(180, 8%, 52%)',
		marginTop: '20px',
		marginBottom: '10px',
	}
})

const CompanyName = styled.div({
	display: 'inline-flex',
	flexDirection: 'row',
	gap: '10px',
	alignItems: 'center',


	fontFamily: 'League Spartan',
	fontSize: '17px',
	fontWeight: '600',
	color: 'hsl(180, 29%, 50%)'
})



const ExtraInfoAboutJob = styled.div({
	display: 'inline-flex',
	flexDirection: 'row',
	gap: '10px',
	alignItems: 'center',

	fontFamily: 'League Spartan',
	fontSize: '15px',
	fontWeight: '500',
	color: 'hsl(180, 8%, 52%)'
})

const JobTitle = styled.div({
	fontFamily: 'League Spartan',
	fontSize: '20px',
	fontWeight: '700',
	color: 'black',
	':hover': {
		color: 'hsl(180, 29%, 50%)',
		cursor: 'pointer'
	}
})


const OvalBadge = ({ children, fontColr, bckClor }: { children: ReactNode, fontColr: string, bckClor: string }) => {

	return (
		<div className={css({
			display: 'inline-flex',
			justifyContent: 'center',
			padding: '5px 10px',
			borderRadius: '50px',
			color: fontColr,
			background: bckClor,
			fontSize: '15px',
			fontWeight: '400',
			textAlign: 'center'
		})}>
			{children}
		</div>
	)
}

const SkillChip = styled.div({

	background: 'hsl(197deg 70% 79% / 25%)',
	fontSize: '16px',
	fontWeight: '500',
	color: 'hsl(180, 29%, 50%)',
	padding: '10px 10px',
	borderRadius: '5px',
	':hover': {
		cursor: 'pointer',
		background: 'hsl(180, 29%, 50%)',
		color: 'white'
	}

})


const Card = ({ icon, companyName, isNew, isFeatured, jobTitle, postedAt, contract, location, skills,searchTokens,setSearchTokens }: {
	icon: JSX.Element | ReactNode,
	companyName: string,
	isNew: boolean,
	isFeatured: boolean,
	jobTitle: string,
	postedAt: string,
	contract: string,
	location: string,
	skills: string[],
	searchTokens?: string[] | never[],
	setSearchTokens?:(arg:any)=>void
}) => {
	return (
		<FlexCard className={isFeatured ? css({
			borderLeft: '5px solid hsl(180, 29%, 50%)',
		}) : ''}>
			<div className={css({
				'@media(max-width:375px)': {
					marginLeft: '20px'
				}
			})} >



				<div>
					<div className={css({
						display: 'inline-flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '20px',
						'@media(max-width:375px)': {
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: '0'

						}

					})}>
						<IconCircle>
							{icon}
						</IconCircle>
						<Description>
							<CompanyName>
								{companyName}

								{isNew
									? <OvalBadge fontColr='white' bckClor='hsl(180, 29%, 50%)' >
										New!
									</OvalBadge>
									: <>
									</>
								}
								{isFeatured
									? <OvalBadge fontColr='white' bckClor='hsl(180, 14%, 20%)' >
										Featured
									</OvalBadge>
									: <>
									</>
								}




							</CompanyName>


							<JobTitle>
								{jobTitle}
							</JobTitle>
							<ExtraInfoAboutJob>
								<div>
									{postedAt}
								</div>
								<div>
									{contract}
								</div>
								<div>
									{location}
								</div>
							</ExtraInfoAboutJob>
						</Description>
					</div>
				</div>
				<Border />
			</div>

			<div className={css({
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '15px',
				marginTop: '10px',
				'@media(max-width:375px)': {
					marginLeft: '20px',
					marginBottom: '20px'
				}
			})}>

				{skills.map(each => {
					return (
						<SkillChip onClick={() => {							
							if (setSearchTokens && searchTokens  ) {
								setSearchTokens([...searchTokens,each])
							}
						}} >
							{each}
						</SkillChip>
					)
				})}


			</div>
		</FlexCard>
	)
}

const SearchBar = ({ searchable, setSearchable }: {
	searchable: string[],
	setSearchable:(a:any)=>void
}) => {

	const SearchBar = styled.div({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignContent: 'center',
		boxShadow: '0px 2px 15px 0px rgb(0 131 107 / 40%)',
		height: 'auto',
		width: '80vw',
		borderRadius: '10px',
		marginTop: '-65px',

		padding: '10px',

		background: 'white',
	})

	const Clear = styled.div({
		padding: '10px 15px',
		fontSize: '17px',
		color: 'hsl(180, 29%, 50%)',
		fontWeight: '700',
		':hover': {
			background: 'hsl(173, 31%, 95%)',
			cursor: 'pointer',
			borderRadius: '10px'
		},
		':active': {
			transform: 'scale(0.9)'
		}
	})

	const SearchItemContainer = styled.div({
		display: 'flex',
		flexDirection: 'row',
		gap: '10px'
	})

	return (
		<SearchBar>
			<SearchItemContainer>
				{searchable.map(eachItem => {
					return (
						<Chip
							key={new Date().getMilliseconds()}
							color='secondary'
							variant='filled'
							label={eachItem}
							onDelete={() => {
								setSearchable(searchable.filter(item => item !== eachItem))
							}}

						/>
					)
				})}
			</SearchItemContainer>
			<Clear onClick={() => {
				setSearchable([])
			}}>
				Clear
			</Clear>

		</SearchBar>
	)
}



function App() {

	const [searchItems, setSearchItems] = useState([])

	var filteredJobListingData = jobListingData.filter(each => {
		return(
			searchItems.some(it => [...each.languages, ...each.tools].includes(it))
		)
	})

	


	return (
		<div>
			<header className={css({
				marginBottom: '40px'
			})}>
				<Header />
			</header>
			<ThemeProvider theme={theme}>
				<FlexColoum>
					<SearchBar searchable={searchItems} setSearchable={setSearchItems} />

					{jobListingData.map(eachItem => {
						return (

							<Card
								key={eachItem.id}
								companyName={eachItem.company}
								contract={eachItem.contract}
								icon={eachItem.logo}
								isFeatured={eachItem.featured}
								isNew={eachItem.new}
								jobTitle={eachItem.role}
								location={eachItem.location}
								postedAt={eachItem.postedAt}
								skills={[...eachItem.languages, ...eachItem.tools]}
								searchTokens={searchItems }
								setSearchTokens={setSearchItems}

							/>
						)
					})}
				</FlexColoum>
			</ThemeProvider>
		</div>
	);
}

export default App;
