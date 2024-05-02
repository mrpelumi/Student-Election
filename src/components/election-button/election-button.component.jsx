import './election-button.styles.scss';

const ElectionButton = ({isSubmitting}) => {
  return (
    <div className="button-container">
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading" : "SUBMIT YOUR CHOICE"}
      </button>
    </div>
  )
}

export default ElectionButton;