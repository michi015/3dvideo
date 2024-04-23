import gsap from "gsap";
import "./style.css";

gsap.fromTo(".hero h2", { opacity: 0 }, { opacity: 1, duration: 1, dealy: 2 });
gsap.fromTo(
  ".hero h3",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.2 }
);
