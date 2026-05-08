import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, id, detailsImg, tags } = currentItem || {};
	return (
		<section className="tj-post-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<article className="tj-post-single-post">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src={
											detailsImg ? detailsImg : "/images/blog/tj-blog-1.webp"
										}
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{title}</h3>
								<div
									className="blog-category-two wow fadeInUp"
									data-wow-delay="0.3s"
								>
									<div className="category-item">
										<div className="cate-images">
											<Image
												src="/images/blog/author-1.png"
												alt="Images"
												width={64}
												height={64}
											/>
										</div>
										<div className="cate-text">
											<span className="degination">Auteur</span>
											<h6 className="title">
												<Link href={`/blogs/${id}`}>Mohamed Bashir Jalloh</Link>
											</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-calender"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Date de publication</span>
											<h6 className="text">15 Avril 2026</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-coments"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Commentaires</span>
											<h6 className="text">03 Commentaires</h6>
										</div>
									</div>
								</div>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										STAUNCH accompagne entrepreneurs et entreprises à toutes les étapes de leur projet. Notre méthodologie MB-JALLOH combine outils internationaux éprouvés et connaissance fine du tissu économique guinéen pour livrer des résultats à fort impact. Indéfectibles à vos côtés, nous structurons votre stratégie, mobilisons les bons interlocuteurs et accompagnons l'exécution opérationnelle dans la durée
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										STAUNCH accompagne entrepreneurs et entreprises à toutes les étapes de leur projet. Notre méthodologie MB-JALLOH combine outils internationaux et expertise terrain pour livrer un impact mesurable
									</p>
									<blockquote className="wow fadeInUp" data-wow-delay="0.1s">
										<p>
											Le plus grand atout d'un consultant est de poser les bonnes questions et de guider ses clients vers leurs propres réponses.
										</p>
										<p>
											<cite>Mohamed Bashir Jalloh, Fondateur STAUNCH</cite>
										</p>
									</blockquote>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										STAUNCH accompagne entrepreneurs et entreprises à toutes les
										étapes de leur projet. Notre méthodologie MB-JALLOH combine
										outils internationaux et expertise terrain guinéenne pour
										livrer un impact mesurable et durable.
									</p>

									<div className="tj-check-list">
										<h4 className="text-anim">Enseignements clés pour les entreprises</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											STAUNCH accompagne entrepreneurs et entreprises à toutes les étapes de leur projet. Notre méthodologie MB-JALLOH combine outils internationaux et expertise terrain pour livrer un impact mesurable.
										</p>
										<ul className="wow fadeInUp" data-wow-delay="0.3s">
											<li>
												<i className="tji-double-check"></i> Découvrez notre expertise 360°
											</li>
											<li>
												<i className="tji-double-check"></i> Engagement indéfectible et impact durable
											</li>
											<li>
												<i className="tji-double-check"></i> Rencontrez notre équipe d'experts
											</li>
											<li>
												<i className="tji-double-check"></i> Connaissez nos consultants
											</li>
										</ul>
									</div>
									<div
										className="tj-post-thumb mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<Image
											src="/images/blog/tj-blog-4.webp"
											alt="post-image"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										<PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<h4 className="text-anim">En conclusion</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Travailler avec un cabinet 360° comme STAUNCH, c'est faire le
										choix d'un partenaire stratégique unique pour transformer
										votre vision en réussite concrète. Du diagnostic au
										déploiement opérationnel, notre équipe vous accompagne avec
										rigueur, transparence et engagement total.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Pour échanger sur votre projet, contactez-nous : la première
										consultation est offerte. Notre équipe vous répond sous 24h
										ouvrées pour qualifier ensemble vos besoins.
									</p>
								</div>
							</article>
							{/* <!-- post tag and share --> */}
							<div
								className="tj-post-details_tags_share wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div className="tj-tags tagcloud">
									<span className="tag__title">Étiquettes :</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
								</div>
								<div className="tj-socials_share">
									<span className="tag__title">Partager :</span>
									<Link href="https://www.facebook.com/" title="Facebook">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
									<Link href="https://x.com/" title="Twitter">
										<i className="fab fa-x-twitter"></i>
									</Link>
									<Link href="https://www.linkedin.com/" title="Linkedin">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
									<Link href="https://www.pinterest.com/" title="Pinterest">
										<i className="fa-brands fa-pinterest-p"></i>
									</Link>
								</div>
							</div>
							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="tj-comments-container">
								<div className="tj-comments-wrap">
									<div className="comments-title">
										<h3 className="title">Commentaires (3)</h3>
									</div>
									<div className="tj-latest-comments">
										<ul>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															src="/images/blog/author-1.png"
															alt="Image"
															width={64}
															height={64}
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h5 className="title">
																<Link href={`/blogs/${id}`}>Aïssatou D.</Link>
															</h5>
														</div>
														<div className="comment-text">
															<span className="date">03 Avril 2026</span>
															<Link className="reply" href={`/blogs/${id}`}>
																<i className="tji-reply"></i>Répondre
															</Link>
														</div>
														<div className="desc">
															<p>
																L'accompagnement de STAUNCH est précieux. Leur connaissance fine de l'écosystème guinéen et leur méthodologie nous ont permis de structurer notre projet en quelques mois
															</p>
														</div>
													</div>
												</div>
											</li>
											<li className="tj-comment">
												<ul className="children">
													<li className="tj-comment">
														<div className="comment-content">
															<div className="comment-avatar">
																<Image
																	src="/images/blog/author-2.png"
																	alt="Image"
																	width={64}
																	height={64}
																/>
															</div>
															<div className="comments-header">
																<div className="avatar-name">
																	<h5 className="title">
																		<Link href={`/blogs/${id}`}>
																			Marden Smith
																		</Link>
																	</h5>
																</div>
																<div className="comment-text">
																	<span className="date">12 Mars 2026</span>
																	<Link className="reply" href={`/blogs/${id}`}>
																		<i className="tji-reply"></i>Répondre
																	</Link>
																</div>
																<div className="desc">
																	<p>
																		Article très intéressant et concret. La
																		méthodologie MB-JALLOH apporte une vraie
																		valeur ajoutée : on sent l'expérience terrain
																		et la rigueur académique combinées. Hâte de
																		lire la suite de la série.
																	</p>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</li>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															src="/images/blog/author-1.png"
															alt="Image"
															width={64}
															height={64}
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h5 className="title">
																<Link href={`/blogs/${id}`}>Karim B.</Link>
															</h5>
														</div>
														<div className="comment-text">
															<span className="date">22 Mars 2026</span>
															<Link className="reply" href={`/blogs/${id}`}>
																<i className="tji-reply"></i>Répondre
															</Link>
														</div>
														<div className="desc">
															<p>
																L'accompagnement de STAUNCH est précieux. Leur connaissance fine de l'écosystème guinéen et leur méthodologie nous ont permis de structurer notre projet en quelques mois
															</p>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tj-comments__container">
									<div className="comment-respond">
										<h3 className="comment-reply-title">Laisser un commentaire</h3>
										<div className="row">
											<div className="col-lg-6">
												<div className="form-input">
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Votre nom"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="name"
														placeholder="Votre email"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-input">
													<input
														type="text"
														id="website"
														name="name"
														placeholder="Votre site web"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-input">
													<textarea
														id="comment"
														name="message"
														placeholder="Votre commentaire"
													/>
												</div>
											</div>
											<div className="comments-btn">
												<button type="submit" className="tj-primary-btn">
													<span className="btn_inner">
														<span className="btn_icon">
															<span>
																<i className="tji-arrow-right"></i>
																<i className="tji-arrow-right"></i>
															</span>
														</span>
														<span className="btn_text">
															<span>Publier mon commentaire</span>
														</span>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
