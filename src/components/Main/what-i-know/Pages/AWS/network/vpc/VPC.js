import React from "react";
import "./VPC.css";

const VPC = () => {
  return (
    <main className={`vpc-home`}>
      <h2>virtual private cloud</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - VPC: <a href="https://aws.amazon.com/vpc/">Click here </a>
          </li>
          <li>
            - Inernet gateway:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - Route table:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - Network ACL:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - NAT Gateway:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - VPC End points:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - VPC peering:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - VPC flow logs:{" "}
            <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - Baston gateway:{" "}
            <a href="https://aws.amazon.com/quickstart/architecture/linux-bastion/">
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

          <h4 className={`center`}> VPC </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Virtual private clouds aka VPC is an AWS service that 
        allows you to have a personal private network within AWS.`}
            <br />
            <br />
            {`Within the private network you can control the 
        architecture of EC2 instances (servers, databases) 
        and control access and security within and inbound 
        to the network.`}
            <br />
            <br />
            {`The traditional structure for a VPC is in this order:`}
            <br />
            <br />
            {`- Internet/private gateway - allows you access to the VPC`}
            <br />
            {`- Router - Once you have access to the VPC the router 
        directs traffic to different route tables `}
            <br />
            {`- Route tables - The route table will then direct 
        traffic to the network ACL`}
            <br />
            {`- Network ACL - Once the traffic from the route table 
        is within the network ACL it is passed into a subnet`}
            <br />
            {`- Subnets  - within a subnet the traffic is passed to 
        a security group of an EC2 instance`}
            <br />
            {`- Security group - once the traffic goes through the 
        security group the traffic reaches the EC2 instances `}
            <br />
            {`Below are the following key concepts for the structure of an VPC`}
            <br />
          </p>

          <h4 className={`center`}> Internet gateway </h4>
          <p className={`border-btm`}>
            {`This is what you attach to a VPC to allow the 
        resources (public subnets) public access to 
        the internet.`}
            <br />
            <br />
            {`It provides a target for your VPC route tables 
        to access to access public internet traffic.`}
            <br />
            <br />
            {`It should be attached to route tables which subnets are public`}
            <br />
            <br />
            {`One per VPC `}
            <br />
            <br />
            {`This is the first step for traffic`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Router </h4>
          <p className={`border-btm`}>
            {`When traffic passes the internet gateway it is 
        the router that directs the IP address to the 
        relevant route table.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Route table </h4>
          <p>
            {`A route table is a set of rules that is defined 
        for each subnet.`}
            <br />
            <br />
            {`It is within route tables we can define what IP 
        addresses have access to the subnets.`}
            <br />
            <br />
            {`You can have multiple subnets to have the same routing rules`}
            <br />
            <br />
            {`A route table by default is created when you create a VPC, the 
        rules defines in the default route table doesn’t allow access 
        from internet traffic, so it is ideal for private subnets but 
        not public`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> For public subnets </h4>
          <p>
            {`The route table should contain the following:`}
            <br />
            <br />
            {`- IPV4 CIDR block of other subnets created - this will 
        allow a route of communication between the created EC2 
        instances within your subnets `}
            <br />
            <br />
            {`- IPV6 CIDR block of other subnets created`}
            <br />
            <br />
            {`- 0.0.0.0/0 (IPV4) and target your internet gateway - this 
        will allow any traffic from the internet to access the EC2
         instances within your public subnet`}
            <br />
            <br />
            {`- - ::/0 (IPV6) and target your internet gateway `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> For private subnets </h4>
          <p className={`border-btm`}>
            {`- IPV4 CIDR block of other subnets created - this will allow 
        a route of communication between the created EC2 instances 
        within your subnets `}
            <br />
            <br />
            {`- IPV6 CIDR block of other subnets created`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Network ACL </h4>
          <p className={`border-btm`}>
            {`Network access control lists aka NACL are an optional 
        layer of security for subnets.`}
            <br />
            <br />
            {`It is within a NACL you can define what traffic has 
        access to your subnets. `}
            <br />
            <br />
            {`You can allow and deny specific IP address from entering 
        and exiting your subnets within your VPC `}
            <br />
            <br />
            {`It is within a NACL you can block individual IP addresses 
        from accessing your subnets `}
            <br />
            <br />
            {`You can create NACLS by going into your VPC dashboard and 
        click NACLS and creating one`}
            <br />
            <br />
            {`NACLS are security for subnets and are stateless because 
        they have allow and deny rules`}
            <br />
            <br />
            {`Security groups are security for individual EC2 instances 
        and automatically allow access to and from an EC2 instance
         if you open the port`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Subnets </h4>
          <p>
            {`A subnet is where your EC2 instances or RDS instances are grouped.`}
            <br />
            <br />
            {`It is within your subnets you can define what EC2 instances are available 
        to be accessed through public traffic and private traffic by creating an 
        EC2 instance in a subnet with public or private settings. `}
            <br />
            <br />
            {`It is also with a subnet you create IP addresses to give to instances`}
            <br />
            <br />
            {`1 subnet per availability zone`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Public Subnets </h4>
          <p>
            {`If a EC2 instance is placed within a public subnet 
        this means that usually anyone over the internet 
        can access this subnet and EC2 instances within 
        your subnet`}
            <br />
            <br />
            {`That is why EC2 instances should be servers.`}
            <br />
            <br />
            {`To make a subnet public after creating a subnet 
        allow auto assign IPV4 and also allow the route 
        table associated with the subnet to allow any 
        IP address`}
            <br />
            <br />
            {`This will allow any EC2 instance created within 
        this subnet to have a public IP address that you 
        created when creating the subnet.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Private Subnets </h4>
          <p className={`border-btm`}>
            {`If a EC2 instance is placed within a private subnet 
        this means that only specific IP addresses can access 
        the EC2 instances within the private subnet.`}
            <br />
            <br />
            {`The IP addresses that can have access to the EC2 instances 
        within the private subnet are defined within the route 
        table assigned with the subnet.`}
            <br />
            <br />
            {`You should usually only allow IP addresses associated with 
        the public subnet to have access to the private subnet `}
            <br />
            <br />
            {`EC2 instances created within a private subnet are not given 
        public IP addresses but private ones.`}
            <br />
            <br />
            {`You can only connect to instances within private subnets through 
        the instances that have permission through the route table.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> NAT instances/Gateways </h4>
          <p>
            {`NAT aka network address translation is a method that allows 
        EC2 instances within a PRIVATE subnet to have access to the
         internet, your private subnets remain private but have a 
         route out to the internet.`}
            <br />
            <br />
            {`This is needed for software updates within your EC2 instances 
        within your private subnet amongst other things.`}
            <br />
            <br />
            {`NATS are created within a public subnet, Once an EC2 instance 
        within a private subnet needs access to the internet it will 
        connect with the NAT that has access through the internet.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> NAT Gateways </h4>
          <p>
            {`These are a collection of EC2 instances that act as a gateway 
        to the internet for your EC2 instances within a private 
        subnet. This has high scalability.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> NAT instances </h4>
          <p className={`border-btm`}>
            {`These are individual EC2 instances you create 
        within your public subnet.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> VPC endpoints </h4>
          <p>
            {`This allows you to create a private connection 
        between your VPC and supported AWS services.`}
            <br />
            <br />
            {`This allows instances within your VPC to to 
        connect with AWS services without an 
        public IP address.`}
            <br />
            <br />
            {`The traffic between your VPC doesn’t go over 
        the internet (internet gateway) but through 
        the amazon network.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Interface endpoints </h4>
          <p>
            {`Attach an ENI (elastic network interface) to a private EC2 
        instance and they will be able to connect to a catalogue 
        of AWS services without using the internet.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`A private EC2 instance created within a private subnet 
        may need to communicate with the AWS service API gateway.`}
            <br />
            {`Normally you will have to attach a NAT gateway within a 
        public subnet for your private EC2 instance to communicate 
        with the internet and thus making a connection to API 
        gateway but with an interface point within your private 
        gateway you create an interface point and the EC2 instance 
        will connect to the interface end point and then communicate 
        with the API gateway.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Gateway endpoint </h4>
          <p className={`border-btm`}>
            {`They are similar but connect directly to the services S3 
        and DynamoDB (for now).`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`A private EC2 instance created within a private 
        subnet may need to communicate with the AWS service S3.`}
            <br />
            {`Normally you will have to attach a NAT gateway within a public 
        subnet for your private EC2 instance to communicate with the 
        internet and thus making a connection to S3 but with an interface 
        point within your private gateway you create an interface point 
        and the EC2 instance will connect to the interface end point and 
        then communicate with S3.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> VPC Peering</h4>
          <p className={`border-btm`}>
            {`Allows you to connect to another VPCs via a private IP address.`}
            <br />
            <br />
            {`Instances act like they are within the same network`}
            <br />
            <br />
            {`You can also peer VPCs with other AWS accounts as 
        well as with other VPCs in the same account`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> VPC Flow logs</h4>
          <p className={`border-btm`}>
            {`This is a feature that allows you to capture information 
        about the IP traffic going to and from your VPC.`}
            <br />
            <br />
            {`The data within flow logs are stored within AWS cloud watch.`}
            <br />
            <br />
            {`You can capture IP traffic data on your`}
            <br />
            {`- VPC`}
            <br />
            {`- Subnet`}
            <br />
            {`- EC2 network `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Baston gateway</h4>
          <p className={`border-btm`}>
            {`This is an EC2 instance you create within your 
        public subnet to allow you to access the EC2 
        instances within your public subnet.`}
            <br />
            <br />
            {`This means this is your dedicated EC2 instance that 
        you use to SSH into your public instances, All other 
        EC2 instances within a public subnet should not have 
        ssh access to the private subnets just the bastion 
        gateway instance `}
            <br />
            <br />
            {`They should have bare minimum software and 
        there are specific AMI for bastion instances`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default VPC;
