import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
    return (
        <div>
            <h2>Задание 1 - Профиль социальной сети</h2>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <h2>Задание 2 - Секция статистики</h2>
            <Statistics title="Upload stats" stats={statisticalData} />
            {/* <Statistics stats={statisticalData} /> */}
            <h2>Задание 3 - Список друзей</h2>
            <FriendList friends={friends} />
            <h2>Задание 4 - История транзакций</h2>
            <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;
