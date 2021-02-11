// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.8.0;

contract HTLC {
    mapping(bytes32 => Order) order;

    struct Order {
        address payable fromAddress;
        address payable toAddress;
        uint256 value;
        uint256 expirationTime;
    }

    // create order
    function create(bytes32 _hash, address payable _toAddress) public payable {
        require(order[_hash].value == 0);
        
        order[_hash] = Order(
            msg.sender,
            _toAddress,
            msg.value,
            block.timestamp + 15 minutes
        );
    }

    // get info about order
    function getOrder(bytes32 _hash)
        public
        view
        returns (
            address,
            address,
            uint256,
            uint256
        )
    {
        return (
            order[_hash].fromAddress,
            order[_hash].toAddress,
            order[_hash].value,
            order[_hash].expirationTime
        );
    }

    // if hashing the key matches, then transfer ETH to toAddress
    function withdraw(bytes32 _key) public {
        bytes32 hash = sha256(abi.encodePacked(_key));
        
        require(order[hash].value > 0);

        
        address payable toAddress = order[hash].toAddress;
        uint256 value = order[hash].value;

        // delete from mapping
        delete order[hash];

        // send
        toAddress.transfer(value);
    }

    // if the contract times out, then return the funds
    function refund(bytes32 _hash) public {
        require(block.timestamp > order[_hash].expirationTime);

        address payable fromAddress = order[_hash].fromAddress;
        uint256 value = order[_hash].value;
        
        // delete from mapping
        delete order[_hash];

        fromAddress.transfer(value);
    }
}
