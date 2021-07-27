import React from 'react';
// import styled from 'styled-components';
import locked_image from '../Resources/images/locked.png';
import arrow_image from '../Resources/images/Vector.png';
import clock_logo from '../Resources/images/clock.png';
import clock_logo_section from '../Resources/images/clockSection.png';
import hamburger_suggestion_modal_image from '../Resources/images/hamburgerSuggestionModal.png'
import hamburger_suggestion_modal_content_image from '../Resources/images/hamburgerSuggestionModalContent.png'

const logo_side_bar = (
	<svg
		width="32"
		height="38"
		viewBox="0 0 32 38"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.419 0.944812C15.3451 0.366646 16.5197 0.366647 17.4458 0.944814L30.5204 9.10723C31.3567 9.62931 31.8649 10.5456 31.8649 11.5314V26.4686C31.8649 27.4544 31.3567 28.3707 30.5204 28.8928L17.4458 37.0552C16.5197 37.6334 15.3451 37.6334 14.419 37.0552L1.3444 28.8928C0.50813 28.3707 0 27.4544 0 26.4686V11.5314C0 10.5456 0.508131 9.62931 1.3444 9.10723L14.419 0.944812Z"
			fill="white"
		/>
		<mask
			id="mask0"
			mask-type="alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="32"
			height="38"
		>
			<path
				d="M14.419 0.944812C15.3451 0.366646 16.5197 0.366647 17.4458 0.944814L30.5204 9.10723C31.3567 9.62931 31.8649 10.5456 31.8649 11.5314V26.4686C31.8649 27.4544 31.3567 28.3707 30.5204 28.8928L17.4458 37.0552C16.5197 37.6334 15.3451 37.6334 14.419 37.0552L1.3444 28.8928C0.50813 28.3707 0 27.4544 0 26.4686V11.5314C0 10.5456 0.508131 9.62931 1.3444 9.10723L14.419 0.944812Z"
				fill="#C4C4C4"
			/>
		</mask>
		<g mask="url(#mask0)">
			<rect
				x="6.82275"
				y="18.0845"
				width="2.85781"
				height="17.6381"
				fill="#3A3D4E"
			/>
			<mask
				id="mask1"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="10"
				y="11"
				width="7"
				height="4"
			>
				<rect
					x="16.2534"
					y="11.4314"
					width="2.85781"
					height="5.71563"
					transform="rotate(90 16.2534 11.4314)"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask1)">
				<path
					d="M10.5378 14.2892C10.5378 13.9139 10.6117 13.5423 10.7553 13.1956C10.8989 12.8488 11.1095 12.5338 11.3748 12.2684C11.6402 12.0031 11.9552 11.7926 12.302 11.6489C12.6487 11.5053 13.0203 11.4314 13.3956 11.4314L13.3956 14.2892L10.5378 14.2892Z"
					fill="#3A3D4E"
				/>
			</g>
			<mask
				id="mask2"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="15"
				y="11"
				width="7"
				height="4"
			>
				<rect
					x="21.3347"
					y="11.4314"
					width="2.85781"
					height="5.71563"
					rx="0.178613"
					transform="rotate(90 21.3347 11.4314)"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask2)">
				<path
					d="M15.7977 14.2892C15.6991 14.2892 15.6185 14.2091 15.6247 14.1107C15.668 13.4179 15.9624 12.7621 16.4561 12.2684C16.9921 11.7325 17.719 11.4314 18.4769 11.4314C19.2348 11.4314 19.9617 11.7325 20.4977 12.2684C20.9914 12.7621 21.2858 13.4179 21.3291 14.1107C21.3353 14.2091 21.2547 14.2892 21.1561 14.2892H18.4769L15.7977 14.2892Z"
					fill="#3A3D4E"
				/>
			</g>
			<path
				d="M17.495 22.0142C17.5936 22.0142 17.6736 22.0941 17.6736 22.1928L17.6736 24.6934C17.6736 24.792 17.5936 24.872 17.495 24.872L9.68063 24.872L9.68063 22.0142L17.495 22.0142Z"
				fill="#3A3D4E"
			/>
			<path
				d="M21.344 25.7205L18.4862 25.7205L18.4862 19.0225C18.4862 18.9238 18.5661 18.8438 18.6648 18.8438L21.1654 18.8438C21.264 18.8438 21.344 18.9238 21.344 19.0225L21.344 25.7205Z"
				fill="#3A3D4E"
			/>
			<path
				d="M10.5288 14.2888L13.3866 14.2888L13.3866 20.9868C13.3866 21.0855 13.3067 21.1654 13.208 21.1654L10.7074 21.1654C10.6088 21.1654 10.5288 21.0855 10.5288 20.9868L10.5288 14.2888Z"
				fill="#3A3D4E"
			/>
			<path
				d="M22.1836 15.1377L22.1836 17.9955L14.4139 17.9955C14.3153 17.9955 14.2353 17.9155 14.2353 17.8169L14.2353 15.3163C14.2353 15.2177 14.3153 15.1377 14.4139 15.1377L22.1836 15.1377Z"
				fill="#3A3D4E"
			/>
			<path
				d="M18.4861 25.7205L18.4861 28.5783L10.5378 28.5783L10.5378 25.8991C10.5378 25.8004 10.6178 25.7205 10.7164 25.7205L18.4861 25.7205Z"
				fill="#3A3D4E"
			/>
			<rect
				x="18.4414"
				y="11.4314"
				width="2.85781"
				height="5.04583"
				transform="rotate(90 18.4414 11.4314)"
				fill="#3A3D4E"
			/>
			<mask
				id="mask3"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="22"
				y="15"
				width="4"
				height="6"
			>
				<rect
					x="25.041"
					y="20.8528"
					width="2.85781"
					height="5.71563"
					transform="rotate(-180 25.041 20.8528)"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask3)">
				<path
					d="M22.1832 15.1372C22.9411 15.1372 23.668 15.4382 24.204 15.9742C24.7399 16.5101 25.041 17.237 25.041 17.995L22.1832 17.995L22.1832 15.1372Z"
					fill="#3A3D4E"
				/>
			</g>
			<mask
				id="mask4"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="22"
				y="20"
				width="4"
				height="6"
			>
				<rect
					x="25.0503"
					y="25.9424"
					width="2.85781"
					height="5.71563"
					rx="0.178613"
					transform="rotate(-180 25.0503 25.9424)"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask4)">
				<path
					d="M22.1925 20.4054C22.1925 20.3067 22.2725 20.2262 22.371 20.2323C23.0638 20.2757 23.7195 20.5701 24.2133 21.0638C24.7492 21.5997 25.0503 22.3266 25.0503 23.0846C25.0503 23.8425 24.7492 24.5694 24.2133 25.1053C23.7195 25.5991 23.0638 25.8935 22.371 25.9368C22.2725 25.943 22.1925 25.8624 22.1925 25.7638L22.1925 23.0846L22.1925 20.4054Z"
					fill="#3A3D4E"
				/>
			</g>
			<rect
				x="25.0503"
				y="23.0852"
				width="2.85781"
				height="5.09048"
				transform="rotate(-180 25.0503 23.0852)"
				fill="#3A3D4E"
			/>
			<path
				d="M10.5376 28.5779H13.3954L13.3954 37.5085C13.3954 37.6072 13.3154 37.6872 13.2168 37.6872H10.7162C10.6176 37.6872 10.5376 37.6072 10.5376 37.5085L10.5376 28.5779Z"
				fill="#3A3D4E"
			/>
			<mask
				id="mask5"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="6"
				y="15"
				width="4"
				height="6"
			>
				<rect
					x="6.82275"
					y="15.2271"
					width="2.85781"
					height="5.71563"
					rx="0.178613"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask5)">
				<circle cx="9.68057" cy="18.0849" r="2.85781" fill="#3A3D4E" />
			</g>
			<mask
				id="mask6"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="18"
				y="25"
				width="4"
				height="4"
			>
				<rect
					x="18.4861"
					y="28.5779"
					width="2.85781"
					height="2.85781"
					transform="rotate(-90 18.4861 28.5779)"
					fill="#CD6767"
				/>
			</mask>
			<g mask="url(#mask6)">
				<path
					d="M21.3343 25.7206C21.3343 26.0958 21.2604 26.4675 21.1167 26.8142C20.9731 27.1609 20.7626 27.476 20.4972 27.7413C20.2319 28.0067 19.9168 28.2172 19.5701 28.3608C19.2234 28.5044 18.8518 28.5784 18.4765 28.5784L18.4765 25.7206L21.3343 25.7206Z"
					fill="#3A3D4E"
				/>
			</g>
		</g>
	</svg>
);

const profile_logo = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.121 15.804C5.21942 14.6179 7.58958 13.9963 10 14C12.5 14 14.847 14.655 16.879 15.804M13 8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

const courses_logo = <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M6 10V9M10 10V7M14 10V5M6 18L10 14L14 18M1 1H19M2 1H18V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

const Live_Class_logo = <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect x="1" y="5" width="19" height="14" rx="2" stroke="white" stroke-width="2" stroke-linejoin="round" />
	<path d="M12 12L9 13.7321L9 10.2679L12 12Z" stroke="white" stroke-width="2" />
	<path d="M5 1L9.88889 5H11.1111L16 1" stroke="white" stroke-width="2" stroke-linecap="round" />
</svg>

const upgradeSubscription_logo = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M18.4167 9.74999V7.58332C18.4167 7.00869 18.1884 6.45759 17.7821 6.05126C17.3757 5.64493 16.8246 5.41666 16.25 5.41666H5.41667C4.84203 5.41666 4.29093 5.64493 3.8846 6.05126C3.47827 6.45759 3.25 7.00869 3.25 7.58332V14.0833C3.25 14.658 3.47827 15.2091 3.8846 15.6154C4.29093 16.0217 4.84203 16.25 5.41667 16.25H7.58333M9.75 20.5833H20.5833C21.158 20.5833 21.7091 20.3551 22.1154 19.9487C22.5217 19.5424 22.75 18.9913 22.75 18.4167V11.9167C22.75 11.342 22.5217 10.7909 22.1154 10.3846C21.7091 9.97826 21.158 9.74999 20.5833 9.74999H9.75C9.17536 9.74999 8.62426 9.97826 8.21794 10.3846C7.81161 10.7909 7.58333 11.342 7.58333 11.9167V18.4167C7.58333 18.9913 7.81161 19.5424 8.21794 19.9487C8.62426 20.3551 9.17536 20.5833 9.75 20.5833ZM17.3333 15.1667C17.3333 15.7413 17.1051 16.2924 16.6987 16.6987C16.2924 17.1051 15.7413 17.3333 15.1667 17.3333C14.592 17.3333 14.0409 17.1051 13.6346 16.6987C13.2283 16.2924 13 15.7413 13 15.1667C13 14.592 13.2283 14.0409 13.6346 13.6346C14.0409 13.2283 14.592 13 15.1667 13C15.7413 13 16.2924 13.2283 16.6987 13.6346C17.1051 14.0409 17.3333 14.592 17.3333 15.1667Z" stroke="white" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const logout_logo = <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15 13L19 9M19 9L15 5M19 9H5M11 13V14C11 14.7956 10.6839 15.5587 10.1213 16.1213C9.55871 16.6839 8.79565 17 8 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H8C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

const back_svg = <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M9 1.5L3 7.5L9 13.5" stroke="white" stroke-width="3" />
</svg>;

const dot_svg = <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="4" cy="4" r="4" fill="white" />
</svg>;

const easy_svg = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="6.5" cy="6.5" r="6.5" fill="#20B15A" />
</svg>;

const medium_svg = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="6.5" cy="6.5" r="6.5" fill="#FFAA2C" />
</svg>;

const hard_svg = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="6.5" cy="6.5" r="6.5" fill="#FF0A0A" />
</svg>;

const lock_svg = <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M9 13V15M3 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19ZM13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13Z" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

const locked_header = "Locked!";

const locked_content = "Please subscribe to access this content";

const locked_button_content = "Check Payment Plans";

const free_trial_video_data = {
	sectionId: 1,
	moduleId: 1,
	topicId: 1,
	subtopicId: 1,
}

let dashboardCard_message = "Be 100% Coding Interview Ready";

let dashboardCard_footer = "Subscribe Now";

let dashboardCard_header = "Ready to take the plunge?";

const section_details = {
	1: <div>
		Dig your heels deeper into fundamentals of data structures and algorithms which is the most important part of coding interviews.
		<br />
		Give particular attention to building your intuition to problem solving and ability to think through new problems by attempting the associated assignments and homeworks.
		<br />
		You will only require basic understanding of any one programming language to get started.
	</div>,
	2: <div>
		Dive deep into Computer Science Fundamentals, Principles of Low Level Design and Design Patterns.
		<br />
		The skills gained in this section will help you to write clean code, hereafter.
		<br /> <br />
		With your excellent skills in fundamentals of Data Structures and Algorithms from the previous section, now you will be tackling problems in Graphs and Range Queries.
	</div>,
	3: <div>
		After the previous sections, you are well prepared to take on the challenge of the last leg in Data Structures and Algorithms: Greedy and Dynamic Programming Algorithms.
		<br /> <br />
		You will also gain insights into how scalable systems work and will be able to appreciate big software systems like UBER, BookMyShow, Google etc.
	</div>
}

const currentDashboardScreenList = {
	myTracks: 0,
	liveClass: 1,
	upgradation: 2
}

// const Burger = styled.div`
//     width: 1rem;
//     height: 2rem;
// 	cursor: pointer;
//     position: relative;
// 	left: 0px;
//     top: 0vh;
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: space-around;
//     z-index: 23;

//     div{
//         width: 2rem;
//         height: 0.25rem;
//         background: ${({ open }) => open ? '#FFFFFF' : '#444BAB'};
//         border-radius: 10px;
//         transform-origin: 1px;
//         transition: all 0.3s linear;

//         &:nth-child(1){
//             transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
//         }

//         &:nth-child(2){
//             transform: ${({ open }) => open ? "translateX(200%)" : "translateX(0)"};
//             opacity: ${({ open }) => open ? '0' : '1'};
//         }

//         &:nth-child(3){
//             transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
//         }
//     }
// `;

// const BurgerMobile = styled.div`
//     width: 1rem;
//     height: 2rem;
//     position: fixed;
//     left: 10px;
// 	cursor: pointer;
//     top: 5px;
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: space-around;
//     z-index: 23;

//     div{
//         width: 2rem;
//         height: 0.25rem;
//         background: ${({ open }) => open ? '#FFFFFF' : '#444BAB'};
//         border-radius: 10px;
//         transform-origin: 1px;
//         transition: all 0.3s linear;

//         &:nth-child(1){
//             transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
//         }

//         &:nth-child(2){
//             transform: ${({ open }) => open ? "translateX(200%)" : "translateX(0)"};
//             opacity: ${({ open }) => open ? '0' : '1'};
//         }

//         &:nth-child(3){
//             transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
//         }
//     }
// `;

// const MenuItem = styled.div`
//     display: flex;
//     flex-flow: column;
//     position: fixed;
//     top: 0px;
//     left: 0;
//     width: 300px;
//     height: 100vh;
//     background-color: #444BAB;
//     border: 1px solid white;
//     box-shadow: 0px 3.04598px 12.1839px rgb(98 98 100 / 50%);
//     padding-top: 7.5vw;
//     transition: transform 0.5s ease-in-out;
//     z-index: 24;
//     opacity: 1;
//     transform: ${({ open }) => open ? "translateX(0)" : "translateX(-200%)"};

// 	.ppa-logo {
// 		width: 100%;
// 		display: flex;
// 		flex-direction: row;
// 		align-items: center;
// 		padding-left: 1vw;
// 		margin-bottom: 2vh;
// 	}

// 	.ppa-logo  > img {
// 		width: 13vw;
// 		margin-right: 0.5vw;
// 	}

// 	.ppa-logo > div > img {
// 		width: 28px;
// 		cursor: pointer;
// 	}
// `;

// const MenuItemMobile = styled.div`
//     display: flex;
//     flex-flow: column;
//     position: fixed;
//     top: 0px;
//     left: 0;
//     width: 250px;
//     height: 100vh;
//     background-color: #444BAB;
//     border: 1px solid white;
//     box-shadow: 0px 3.04598px 12.1839px rgb(98 98 100 / 50%);
//     padding-top: 12vw;
//     transition: transform 0.5s ease-in-out;
//     z-index: 24;
//     opacity: 1;
//     transform: ${({ open }) => open ? "translateX(0)" : "translateX(-200%)"};
// 	.ppa-logo {
// 		width: 100%;
// 		display: flex;
// 		flex-direction: row;
// 		align-items: center;
// 		padding-left: 1vw;
// 		margin-bottom: 2vh;
// 	}

// 	.ppa-logo  > img {
// 		width: 50vw;
// 		margin-right: 0.5vw;
// 	}

// 	.ppa-logo > div > img {
// 		width: 28px;
// 		cursor: pointer;
// 	}
// `;


export {
	dashboardCard_message,
	dashboardCard_footer,
	dashboardCard_header,
	logo_side_bar,
	profile_logo,
	courses_logo,
	Live_Class_logo,
	logout_logo,
	clock_logo,
	arrow_image,
	back_svg,
	dot_svg,
	easy_svg,
	medium_svg,
	hard_svg,
	lock_svg,
	locked_image,
	locked_header,
	locked_content,
	locked_button_content,
	free_trial_video_data,
	section_details,
	upgradeSubscription_logo,
	currentDashboardScreenList,
	hamburger_suggestion_modal_image,
	hamburger_suggestion_modal_content_image,
	clock_logo_section,
	// Burger,
	// BurgerMobile,
	// MenuItem,
	// MenuItemMobile
}