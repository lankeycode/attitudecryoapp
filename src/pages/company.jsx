// import ButtonToUp from "components/Button/ButtonToUp";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { Parallax, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { transition } from "@chakra-ui/react";

import Styles from "./company.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonToUp from "../Components/Button/ButtonToUp";

export default function Company() {
	//STATE
	const animationRight1 = useAnimation();
	const animationRight3 = useAnimation();
	const animationRight5 = useAnimation();
	const animationLeft2 = useAnimation();
	const animationLeft4 = useAnimation();
	const animationLeft6 = useAnimation();
	const { ref: ref1, inView: p1IsVisible } = useInView({
		threshold: 0.9,
	});
	const { ref: ref2, inView: p2IsVisible } = useInView({
		threshold: 0.9,
	});
	const { ref: ref3, inView: p3IsVisible } = useInView({
		threshold: 0.9,
	});
	const { ref: ref4, inView: p4IsVisible } = useInView({
		threshold: 0.9,
	});
	const { ref: ref5, inView: p5IsVisible } = useInView({
		threshold: 0.5,
	});
	const { ref: ref6, inView: p6IsVisible } = useInView({
		threshold: 0.9,
	});

	// //BEHAVIORS
	useEffect(() => {
		if (p1IsVisible) {
			animationRight1.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p1IsVisible) {
			animationRight1.start({
				y: "50%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p1IsVisible, animationRight1]);

	useEffect(() => {
		if (p2IsVisible) {
			animationLeft2.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p2IsVisible) {
			animationLeft2.start({
				y: "30%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p2IsVisible, animationLeft2]);

	useEffect(() => {
		if (p3IsVisible) {
			animationRight3.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p3IsVisible) {
			animationRight3.start({
				y: "30%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p3IsVisible, animationRight3]);

	useEffect(() => {
		if (p4IsVisible) {
			animationLeft4.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p4IsVisible) {
			animationLeft4.start({
				y: "30%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p4IsVisible, animationLeft4]);

	useEffect(() => {
		if (p5IsVisible) {
			animationRight5.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p5IsVisible) {
			animationRight5.start({
				y: "30%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p5IsVisible, animationRight5]);

	useEffect(() => {
		if (p6IsVisible) {
			animationLeft6.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.2,
				},
			});
		}
		if (!p6IsVisible) {
			animationLeft6.start({
				y: "30%",
				opacity: 0,
				transition: {
					duration: 2,
				},
			});
		}
	}, [p6IsVisible, animationLeft6]);

	//RENDER

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" font-taviraj w-screen bg-blue3"
		>
			<div className={Styles.mainBis}>
				<img
					src="/images/grenoble.jpg"
					layout="fill"
					objectFit="cover"
					alt=""
				/>
				<div className="companyH1  text-center py-3 px-4 md:py-6 md:px-12 justify-center  xs:left-[5rem] md:left-[40%] mdl:left-[45%] absolute xs:top-[5rem] sm:top-[10rem] md:top-[12rem] mdl:top-[15rem] xs:text-[2.5rem]  md:text-6xl mdl:text-7xl   font-taviraj font-bold ">
					<h1 className={Styles.companyH1}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</h1>
				</div>
			</div>
			<div className="relative justify-center  xs:bottom-[12rem] xs:text-sm sm:bottom-[17rem] sm:text-base  md:bottom-[26rem]  mdl:bottom-[20rem] flex md:text-3xl">
				<div className={Styles.BlurBis}>
					<p className=" text-blue  relative top-[25%] animate-[fadeIn_4.5s_ease] ">
						Cryothérapie
					</p>
				</div>

				<div className={Styles.BlurBis}>
					<p className=" relative top-[25%] animate-[fadeIn_4.5s_ease] text-skyblue ">
						Infrathérapie
					</p>
				</div>

				<div className={Styles.BlurBis}>
					<p className=" text-skyblue relative top-[25%]  animate-[fadeIn_4.5s_ease]  ">
						TeslaFormer
					</p>
				</div>
			</div>

			<ButtonToUp />
			<div className={Styles.transition}></div>

			<div className="relative xs:-top-48 sm:-top-60 w-[90vw] md:w-[70vw]  mx-auto  h-[50vh] md:h-[60vh] mdl:h-[70vh] border-2 border-black">
				<img src="/attitudeLogo.svg" layout="fill" alt="" />
			</div>
			<div className="min-h-screen bg-blue1 border-t-4 border-t-skyblue relative w-screen  pb-40 pt-40 mb-80 mdl:mb-[55rem] text-lg top-10   ">
				<div ref={ref1} className="">
					<motion.p
						animate={animationRight1}
						className="relative text-2xl xs:w-[90vw] xs:mx-auto md:w-[60vw] mdl:w-[40vw] p-5   md:ml-20  rounded-md bg-blue2 shadow-md shadow-blue"
					>
						<span className="text-blue font-bold">
							Attitude Cryo{" "}
						</span>
						est un lieu unique en Isère ! Doté des dernières
						innovations technologiques validé scientifiquement pour
						votre Bien-être.
					</motion.p>
				</div>

				<div ref={ref2}>
					<motion.p
						animate={animationLeft2}
						className="relative text-2xl xs:w-[90vw] xs:mx-auto  md:w-[60vw] mdl:w-[40vw] p-2 md:ml-60 mdl:ml-[35rem]  top-20 mb-20 rounded-md bg-blue2 shadow-md shadow-blue"
					>
						<span className="text-blue font-bold">Cryothérapie</span>
						<br />
						Equipé de la toute dernière chambre Made in France
						d’Aurore Concept, une double chambre (-60°c et -110°C) de
						cryothérapie en corps entier électrique et intelligente
						dotée d’une caméra infrathermique, pouvant accueillir
						jusqu’à 2 personnes sur la même séance.
					</motion.p>
				</div>
				<div ref={ref5}>
					<motion.p
						animate={animationRight5}
						className="relative text-2xl xs:w-[90vw] xs:mx-auto  md:w-[60vw] mdl:w-[40vw] p-2 md:ml-60 mdl:ml-[35rem]  top-20 mb-32 rounded-md bg-blue2 shadow-md shadow-blue"
					>
						Nous avons fait le choix d’une cryothérapie en corps
						entier pour une raison simple… Les thermorécepteurs…
						certains répondent au froid, d&apos;autres à la chaleur. «
						Et, la plus grande densité de ce type de récepteurs se
						situe au niveau de la face »
					</motion.p>
				</div>

				<div ref={ref3}>
					<motion.p
						animate={animationRight3}
						className="relative text-2xl xs:w-[90vw] xs:mx-auto md:w-[60vw] mdl:w-[40vw] p-5 top-20 mb-32  md:ml-20  rounded-md bg-blue2 shadow-md shadow-blue"
					>
						<span className="text-blue font-bold">
							Infrathérapie{" "}
						</span>
						<br />
						Le tout récent dôme appelé « sauna japonais » Made in
						France de Vital Tech, un concentré de technologie IRL
						(infrarouges longs),une technologie brevetée, fabrication
						à la main 100% française, bienfaits prouvés cliniquement.
					</motion.p>
				</div>

				<div ref={ref4}>
					<motion.p
						animate={animationLeft4}
						className="relative text-2xl xs:w-[90vw] xs:mx-auto  md:w-[60vw] mdl:w-[40vw] p-2 md:ml-60 mdl:ml-[35rem]  top-20 mb-32 rounded-md bg-blue2 shadow-md shadow-blue"
					>
						<span className="text-blue font-bold">Tesla Former </span>
						<br />
						Une toute nouvelle innovation la « Stimulation Magnétique
						Fonctionnelle. »
					</motion.p>
				</div>
			</div>

			<div
				id="cryo"
				className="h-2 bg-transparent w-40 relative xs:top-[-17rem] sm:top-[-20rem] md:top-[-23rem] mdl:top-[-53rem]"
			></div>

			{/********* MAIN SECTION2 ****************/}
			<div className="">
				<p className={Styles.swiperTitleCryo}>La Cryothérapie</p>
				<Swiper
					style={{
						"--swiper-navigation-color": "#2b73b3",
						"--swiper-pagination-color": "#2b73b3",
					}}
					loop={true}
					speed={600}
					parallax={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Parallax, Pagination, Navigation]}
					className={Styles.mySwiper}
				>
					<div
						slot="container-start"
						className={Styles.parallaxBg}
						style={{}}
						data-swiper-parallax="-23%"
					></div>

					<SwiperSlide>
						<div className="" data-swiper-parallax="-300">
							<div className="w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
								<img
									src="/images/cryoInterior.jpeg"
									layout="fill"
									objectFit="cover"
									priority
									alt=""
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="" data-swiper-parallax="-300">
							<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
								<img
									src="/images/cryoInterior1.jpeg"
									layout="fill"
									priority
									alt=""
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="" data-swiper-parallax="-300">
							<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
								<img
									src="/images/cryoInterior2.jpeg"
									layout="fill"
									priority
									alt=""
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="" data-swiper-parallax="-300">
							<div className="w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
								<img src="/relax.jpg" layout="fill" priority alt="" />
							</div>
						</div>
					</SwiperSlide>
				</Swiper>

				{/********* SECTION3 ****************/}
				<div className={Styles.section3}>
					<div
						id="infra"
						className="h-2 bg-[transparent] w-40 relative xs:top-[-17rem] sm:top-[-20rem] md:top-[-23rem] mdl:-top-[50rem]"
					></div>
					<p className={Styles.swiperTitleInfra}>Infrathérapie</p>
					<Swiper
						style={{
							"--swiper-navigation-color": "#2b73b3",
							"--swiper-pagination-color": "#2b73b3",
						}}
						loop={true}
						speed={600}
						parallax={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Parallax, Pagination, Navigation]}
						className={Styles.mySwiper}
					>
						<div
							slot="container-start"
							className={Styles.parallaxBg}
							style={{}}
							data-swiper-parallax="-23%"
						></div>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[50vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				{/********* SECTION4 ****************/}
				<div className={Styles.section4}>
					<div
						id="tesla"
						className="h-2 bg-[transparent] w-40 relative xs:top-[-17rem] sm:top-[-20rem] md:top-[-23rem] mdl:-top-[50rem]"
					></div>
					<p className={Styles.swiperTitleTesla}>
						Tesla Former & chair
					</p>
					<Swiper
						style={{
							"--swiper-navigation-color": "#2b73b3",
							"--swiper-pagination-color": "#2b73b3",
						}}
						loop={true}
						speed={600}
						parallax={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Parallax, Pagination, Navigation]}
						className={Styles.mySwiper}
					>
						<div
							slot="container-start"
							className={Styles.parallaxBg}
							style={{}}
							data-swiper-parallax="-23%"
						></div>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="" data-swiper-parallax="-300">
								<div className=" w-[90vw] mdl:w-[60vw] h-[55vh] mdl:h-[75vh] mx-auto">
									<img
										src="/relax.jpg"
										layout="fill"
										priority
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			{/********* SECTION5 ****************/}
			<div className={Styles.section5}>
				<p className={Styles.p7}>
					Venez découvrir tous les bienfaits au sein de notre centre.
				</p>
				<br />
			</div>
		</motion.div>
	);
}
