import React from "react";
import "./Redis.css";

const Redis = () => {
  return (
    <main className={`redis-home`}>
      <h2>redis</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Redis installation:{" "}
            <a
              href="https://redis.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Redis datatypes:{" "}
            <a
              href="https://redis.io/topics/data-types"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Redis commands:{" "}
            <a
              href="https://redis.io/commands"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
        </ul>
      </article>

      <section className={`html-content`}>
        <article>
          <h4 className={`border-btm`}>
            {" "}
            (Below are quick notes and tips about the subject, for more better
            information on the subject please refer to the resources above)
          </h4>

          <h4 className={`center`}> Redis </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`This is a database which doesn’t use SQL (noSQL)`}
            <br />
            <br />
            {`Redis’ database works with a key and value format `}
            <br />
            <br />
            {`Redis has in memory storage making it very easy to 
        access and grab information from its database `}
            <br />
            <br />
            {`Redis is useful for small types of data.
        This database is useful for session management.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Redis datatypes</h4>
          <p>
            {`Redis can handle these data types `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Strings </h4>
          <p>
            {`Strings are text but in redis numbers are also converted into strings.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Hashes</h4>
          <p>
            {`Similar to javascript objects`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Lists</h4>
          <p>
            {`List are list arrays in javascript.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Sets</h4>
          <p>
            {`Unordered sets allows you to list your 
        strings in an unordered fashion. Within 
        sets you CANNOT have the same key.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Sorted Sets</h4>
          <p className={`border-btm`}>
            {`Ordered sets allows you to list your strings 
        in an ordered fashion. Within sets you CANNOT 
        have the same key.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Download redis on your machine from the url in the online resources.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p className={`border-btm`}>
            {`Once redis is downloaded on your machine got into its 
        directory within your terminal and use the command make. 
        Once that is done run the redis server and redis cli.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(Within redis directory in the terminal)`}
            <br />
            <br />
            {`make`}
            <br />
            <br />
            {`src/redis-server --port 6000 --daemonize yes`}
            <br />
            <br />
            {`src/redis-cli`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Redis commands </h4>
          <p className={`border-btm`}>
            {`make`}
            <br />
            <br />
            {`make - This command in the terminal is used to 
        initialise redis on your machine right after you
         have downloaded it.`}
            <br />
            <br />
            <br />
            {`src/redis-server`}
            <br />
            <br />
            {`src/redis-server - This allows you to start and 
        run a redis database on a server`}
            <br />
            <br />
            <br />
            {`src/redis-cli`}
            <br />
            <br />
            {`src/redis-cli - This allows you to use redis 
        commands on your redis database running on a 
        server `}
            <br />
            <br />
            <br />
            {`set`}
            <br />
            <br />
            {`SET key “value” - This allows you set and 
        store values within your redis database `}
            <br />
            <br />
            <br />
            {`get`}
            <br />
            <br />
            {`GET key - This allows you to select values from your 
        database via the key`}
            <br />
            <br />
            <br />
            {`del`}
            <br />
            <br />
            {`DEL key - This allows you to delete values in your redis database via the key`}
            <br />
            <br />
            <br />
            {`exists`}
            <br />
            <br />
            {`EXISTS key - This allows you to check to see 
        if a value exists via the key`}
            <br />
            <br />
            <br />
            {`expire`}
            <br />
            <br />
            {`EXPIRE key value - This allows you to delete a value 
        from the database after a set amount of time. The time
         is defined by the value `}
            <br />
            <br />
            <br />
            {`incrby`}
            <br />
            <br />
            {`INCRBY key value - This allows to increment values. 
        The incrementation value is defined by value  `}
            <br />
            <br />
            <br />
            {`decr`}
            <br />
            <br />
            {`DECR key - This allows you to decrement values. 
        It can only decrement by 1`}
            <br />
            <br />
            <br />
            {`mset`}
            <br />
            <br />
            {`MSET key value key value - This allows you to set 
        and store multiples values within your database `}
            <br />
            <br />
            <br />
            {`mget`}
            <br />
            <br />
            {`MGET key value key value - This allows you to select and grab multiple 
        values already set within your database  `}
            <br />
            <br />
            <br />
            {`hmset`}
            <br />
            <br />
            {`HMSET hashName key value key value - 
        this allows you to store hashes into your redis database. 
        Hashes are similar to objects  `}
            <br />
            <br />
            <br />
            {`hmget`}
            <br />
            <br />
            {`HGET hashName key - This allows 
        you to select data from hashes within your redis database`}
            <br />
            <br />
            <br />
            {`hgetall`}
            <br />
            <br />
            {`HGETALL hashName - This allows you to select all the data 
        within your hash within your redis database `}
            <br />
            <br />
            <br />
            {`lpush/rpush`}
            <br />
            <br />
            {`LPUSH listName value`}
            <br />
            {`RPUSH listName value`}
            <br />
            <br />
            {`LPUSH - Allows you to enter data at the TOP of a list`}
            <br />
            <br />
            {`RPUSH - Allows you to enter data at the BOTTOM of a list`}
            <br />
            <br />
            <br />
            {`lrange`}
            <br />
            <br />
            {`LRANGE listName value value - This allows you to select values 
        from the list. You can decide the range of the values you want 
        to choose from with the values.`}
            <br />
            <br />
            <br />
            {`lpop/rpop`}
            <br />
            <br />
            {`LPOP listName`}
            <br />
            {`RPOP listName`}
            <br />
            <br />
            {`LPOP - This allows you to delete the TOP value within the list`}
            <br />
            {`RPOP - This allows you to delete the BOTTOM value within the list `}
            <br />
            <br />
            <br />
            {`sadd`}
            <br />
            <br />
            {`SADD setName value value value - 
        This allows you to set and store values 
        within a set `}
            <br />
            <br />
            <br />
            {`smembers`}
            <br />
            <br />
            {`SMEMBERS setName - Allows you to see the values 
        within your set in your redis database `}
            <br />
            <br />
            <br />
            {`sismember`}
            <br />
            <br />
            {`SISMEMBER setName key - allows you to select a
       specific value from a set `}
            <br />
            <br />
            <br />
            {`zadd`}
            <br />
            <br />
            {`ZADD sortedSetName score value - allows you to add values to an ordered set. The score value determines the order of the set, 
        the closer the score is to 0 the higher on the list it will be`}
            <br />
            <br />
            <br />
            {`zrange`}
            <br />
            <br />
            {`ZRANGE setName value value - Allows you to select a value from a ordered 
        set depending on its score value, the range is determined by the values `}
            <br />
            <br />
            <br />
            {`zrank`}
            <br />
            <br />
            {`ZRANK setName value - This allows you to see where the value ranks 
        within your ordered set `}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Redis;
