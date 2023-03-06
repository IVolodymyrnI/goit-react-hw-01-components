import { UserProfile } from 'components/UserProfile/UserProfile';
import { StatsTitle } from 'components/Statistics/StatsTitle/StatsTitle';
import { StatsList } from 'components/Statistics/StatsList/StatsList';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Section } from './AppStyle';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export function App() {
  return (
    <div className="app">
      <UserProfile
        avatar={user.avatar}
        stats={user.stats}
        location={user.location}
        username={user.username}
        tag={user.tag}
      />
      <Section>
        <StatsTitle title="Upload stats" />
        <StatsList data={data} />
      </Section>
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
