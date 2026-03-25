import { Link } from "react-router-dom";
import "./ExerciseCard.css";

interface ExerciseCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  concepts: string[];
}

export default function ExerciseCard({
  title,
  description,
  icon,
  path,
  concepts,
}: ExerciseCardProps) {
  return (
    <div className="exercise-card">
      <div className="exercise-card__icon-wrap">
        <span className="exercise-card__icon">{icon}</span>
      </div>
      <h3 className="exercise-card__title">{title}</h3>
      <p className="exercise-card__description">{description}</p>

      <div className="exercise-card__concepts">
        <p className="exercise-card__concepts-label">Concepts</p>
        <ul className="exercise-card__concepts-list">
          {concepts.map((concept, idx) => (
            <li key={idx} className="exercise-card__concept-tag">
              {concept}
            </li>
          ))}
        </ul>
      </div>

      <Link to={path} className="exercise-card__button">
        View Exercise
        <svg className="exercise-card__arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}