import React from "react";
import "./EC2.css";

const EC2 = () => {
  return (
    <main className={`ec2-home`}>
      <h2>ec2</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - EC2: <a href="https://aws.amazon.com/ec2/">Click here </a>
          </li>
          <li>
            - Instance types:{" "}
            <a href="https://aws.amazon.com/ec2/instance-types/">Click here </a>
          </li>
          <li>
            - AMI:{" "}
            <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - EBS: <a href="https://aws.amazon.com/ec2/">Click here </a>
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

          <h4 className={`center`}> EC2 </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`EC2 aka elastic compute cloud is a AWS service that 
        provides re sizeable compute capacity within the cloud. 
        They provide you with a virtual computer that you can 
        run within the AWS service.`}
            <br />
            <br />
            {`Normally you will have to build a computer with the right 
        specs to build your server, EC2 allows you to use a computer
         within amazon with custom configuration for your specific needs.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Instances </h4>
          <p>
            {`These are the different types of computers you can access from AWS EC2.`}
            <br />
            <br />
            {`There are many instances and they come with different computer specs 
        to match the needs of the application.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> AMI </h4>
          <p>
            {`Amazon machine images are the software used to run your application.`}
            <br />
            <br />
            {`They can be defined based on their region, operating system, architecture, 
        launch permissions and storage (memory given for the software)`}
            <br />
            <br />
            {`You can use an instance store or an EBS volume to store your AMI.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> EBS </h4>
          <p>
            {`EBS aka elastic block storage provides storage for your instance.`}
            <br />
            <br />
            {`By default when you create an instance you are give storage for 
        your operating system.`}
            <br />
            <br />
            {`You can then add additional EBS volumes to an instance to make 
        it have more storage.`}
            <br />
            <br />
            {`There are different types of storage types available for your 
        instance provided by AWS.`}
            <br />
            <br />
            {`You can create snapshots of EBS volumes which allow you to create a 
        copy of you volume and use it for another instance `}
            <br />
            <br />
            {`You can encrypt the root device ebs volume and normal volumes`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Tags </h4>
          <p>
            {`EBS aka elastic block storage provides storage for your instance.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Security groups </h4>
          <p>
            {`A security group is the set of instructions that allow traffic in and 
        out of your instance it acts as a firewall`}
            <br />
            <br />
            {`It is though your security group you can open ports to your instance 
        to allow http, SSH, https etc access to and from your instance.`}
            <br />
            <br />
            {`An instance can have multiple security groups. The ports are stateful 
        which mean if you open a port it will accept incoming and out 
        coming traffic. All inbound ports by default are closed`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> ENI, EN, EFA </h4>
          <p>
            {`ENI`}
            <br />
            <br />
            {`This is a network card you can add to your instance.
        By default your instance will come with an ENI `}
            <br />
            <br />
            <br />
            {`EN`}
            <br />
            <br />
            {`This is an enchanted network type available for 
        selected instance types `}
            <br />
            <br />
            <br />
            {`EFA`}
            <br />
            <br />
            {`A network device you can attach to your instance 
        which is used for acceleration of high performance computing`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Bootstrap Scripts </h4>
          <p>
            {`This allows you to run commands whilst creating your instance, 
        instead of doing it once you have created it.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`When creating an instance under advanced settings you will be 
        asked whether you want to add bootstrap scripts.`}
            <br />
            <br />
            {`You can write your scripts here`}
            <br />
            <br />
            {`yum update`}
            <br />
            <br />
            {`This will update the amazon linux instance before you have 
        access to it`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Meta data </h4>
          <p>
            {`Within an EC2 instance with an amazon linux AMI you 
        can get the information about an instance or the
        bootstrap scripts used.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`SSH into your instance and use the command `}
            <br />
            <br />
            {`curl http://169.254.169.254/latest/meta-data`}
            <br />
            <br />
            {`For bootstrap data`}
            <br />
            <br />
            {`curl http://169.254.169.254/latest/user-data`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default EC2;
