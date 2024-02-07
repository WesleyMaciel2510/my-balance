interface AccountCardProps {
  type: string;
  amount: number;
}
const AccountCard: React.FC<AccountCardProps> = ({ type, amount }) => {
  return (
    <div style={{ flex: 1 }}>
      <div className="card w-96 glass">
        <div className="card-body">
          <h2 className="card-title">{type} Account</h2>
          <h2 className="card-title"> $ {amount}</h2>
          <p>How to park your car at your garage?</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
