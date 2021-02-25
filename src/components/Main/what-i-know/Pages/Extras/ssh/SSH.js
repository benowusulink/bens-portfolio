import React from "react";
import "./SSH.css";

const SSH = () => {
  return (
    <main className={`ssh-home`}>
      <h2>SSH</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - SSH:{" "}
            <a
              href="https://www.ssh.com/ssh/protocol/"
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

          <h4 className={`center`}> SSH </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`SSH (secure shell) is a protocol (Similar to http, 
        https etc) that allows you to communicate with 
        other computers.`}
            <br />
            <br />
            {`This means like http it is a standard of 
        communication used between computers`}
            <br />
            <br />
            {`SSH allows users to share files and control 
        other computers over the internet.`}
            <br />
            <br />
            {`SSH uses encryption to secure your data when 
        transferring it between computers.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`To use SSH within your terminal use the command`}
            <br />
            <br />
            {`ssh user@computerAddress`}
            <br />
            <br />
            {`ssh - allows you to create a ssh connection with another computer`}
            <br />
            <br />
            {`user - this refers to which user on the computer you are 
        connecting to that you want to access.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`user: ben`}
            <br />
            <br />
            {`computerAddress - this refers to location 
        address of the computer you are trying to 
        connect to via ssh.`}
            <br />
            {`The address can either be an IP address or an URL`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Client and host</h4>
          <p className={`border-btm`}>
            {`CLIENT refers to the machine trying to to access a computer.`}
            <br />
            <br />
            {`HOST refers to the machine that you are trying to access.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Other protocols</h4>
          <p className={`border-btm`}>
            {`http - allows the communication between a browser and a server.`}
            <br />
            <br />
            {`https - allows the communication between a browser and a 
        server but the data is encrypted so is secure.`}
            <br />
            <br />
            {`ftp - allows communication between two computers 
        in which you can send files.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How SSH works </h4>
          <p>
            {`SSH uses 3 techniques to help it work:`}
            <br />
            <br />
            {`- Symmetrical encryption`}
            <br />
            {`- Asymmetrical encryption`}
            <br />
            {`- Hashing `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Symmetrical encryption </h4>
          <p>
            {`Symmetric encryption allows the communication from the host 
        to the client via ONE secret key which does both encryption 
        and decryption by both parties.`}
            <br />
            <br />
            {`Secrets keys are generated prior to every SSH session and 
        is specific to each session. It is generated prior to a 
        process called client authentication.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`From the client if I was to send the text “hello” to the host
       via symmetrical encryption first the text hello from the client
        will be encrypted via the clients key and then transferred to 
        the host with the encrypted message.`}
            <br />
            <br />
            {`If the host has the same key as the one from the client it will 
        be able to decrypt the text sent by the client with the same key 
        and the original text sent by the client before it was encrypted 
        can now be displayed on the host which is “hello”.`}
            <br />
            <br />
            {`Encryption and decryption via the client and hosts is done 
        by the same key.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Asymmetrical encryption </h4>
          <p>
            {`This allows for the communication between client and host 
        but is more secure because instead of using one key from 
        client to host for both encryption and decryption, 
        asymmetrical encryption does this via two keys for both 
        encryption and decryption.`}
            <br />
            <br />
            {`Both the client and the host own two keys, the client owns 
        a public and private key and so does the host.`}
            <br />
            <br />
            {`Public keys as the name suggests can be shared and be out in the public.
        Private keys should never be exposed.`}
            <br />
            <br />
            {`The public and private key on the client are linked in terms of 
        functionality as with the host and use one another to encrypt
         and decrypt data.`}
            <br />
            <br />
            {`A message that is encrypted by one machines public key can only 
        be decrypted by the same machines private key`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> How it works </h4>
          <p>
            {`Through asymmetrical encryption the client and the host will both 
        have private and public keys for each computer (1 private and 
        1 private for client and the same with host equalling 4 keys in 
        total)`}
            <br />
            <br />
            {`To establish a connection between the client and the host they both 
        exchange their public keys to each other. (Client now has 1 private 
        key(client private key) and 1 public key (host public key) and vice 
        versa).`}
            <br />
            <br />
            {`Now a connection has been made if if the client sends a message “hello” 
        it will first be encrypted on the client machine with the public key it 
        obtained from the host and then sent to the host with an encrypted 
        message representing “hello”`}
            <br />
            <br />
            {`Now the host has received the encrypted message from the client it will 
        now use its own private key to decrypt the message. The host now has 
        access to the message that was sent from the client which is “hello”. `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Key exchange Algorithm </h4>
          <p>
            {`A secure way to share keys in an SSH session so it cannot be 
        compromised and the connection is secure.`}
            <br />
            <br />
            {`Within a key exchange algorithm the key for the session is not 
        actually transferred between the client and the host which makes 
        this secure, instead the client and the host share public pieces
        of data and then manipulate it to determine the secret key`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Hashing </h4>
          <p className={`border-btm`}>
            {`Thanks to hashing, messages sent from client to 
        the host or vice versa cannot be tampered with.`}
            <br />
            <br />
            {`Hashing turns messages into complete gibberish.`}
            <br />
            <br />
            {`If any message has been tampered with during your 
        ssh connection the hash will change COMPLETELY 
        meaning the message was tampered with and will 
        no longer be accepted.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Authentication </h4>
          <p>
            {`When using SSH when establishing a connection between 
        the host and the host or vice versa there are two ways 
        you can authentic your rights to have access to each
        other machines.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Password </h4>
          <p>
            {`When establishing a SSH connection the first way to 
        authenticate your rights to secure this connection 
        is by using a password.`}
            <br />
            <br />
            {`Once the password is accepted a secure SSH connecting 
        can be created between the client and the host.`}
            <br />
            <br />
            {`Passwords are safe to use because they are hashed 
        before they are sent. They are not recommended`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> RSA </h4>
          <p>
            {`This technique allows you to prove you have rights 
        to the machine during an SSH connection without using 
        a password.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`First go into a hidden file in your users directory called .ssh, 
        if it isn’t there create it yourself.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`mkdir .ssh`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`Use the command ssh-keygen to create a public and private key, 
        you will then be asked where you would like to save it, save it 
        within the hidden .ssh file within your user directory. You can 
        generate multiple private and public keys not just one.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`ssh-keygen`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p>
            {`When you have created the private and public keys, 
        within your .ssh file you have the files id_rsa and
        id_rsa.pub.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`The id_rsa is the PRIVATE KEY.`}
            <br />
            {`The id_rsa.pub is the PUBLIC KEY.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 4 </h4>
          <p>
            {`Next you will have to copy your public key so you can transfer it to 
        whatever computer you would like to connect with. To do this use 
        the command:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`pbcopy < ~/.ssh/id_rsa.pub`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 5 </h4>
          <p>
            {`Now that you have copied your public key it is now time to exchange it 
        with the computer you want to connect with, to do this connect with the 
        computer within your terminal via the command ssh user@userAddress`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 6 </h4>
          <p>
            {`Now within the computer go into its user directory and look for its hidden .ssh file (if it isn’t there create it yourself). 
Within the .ssh file there should be a file called “authorised keys” (if it isn’t there create it yourself)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`touch authorised keys`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 7 </h4>
          <p>
            {`Use the command nano authorised keys to edit text within the authorised keys 
        file, paste the public key which you have copied from the first computer into 
        this file and then save the changes and exit the file.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 8 </h4>
          <p>
            {`Now if you go back to the first computer and try to connect with the second computer 
        with the command ssh user@userAddress you will be able to establish a connection 
        without a password.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default SSH;
