import React from "react";
import NavBar from "../components/NavBar";

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="About">
                <h1>What is backpropagation?</h1>
                <p>
                    Backpropgation is an algorithm typically used to train neural networks.
                    It is used to calculate the gradient of the loss function with respect to the
                    weights of the neural network, that is dL/dw. This is calculated using the chain
                    rule and in neural networks where there will be several layers, the chain
                    rule is applied recursively.
                </p>
                <p>
                    Here, in VisualBackprop we only have a simple one-layer neural network without
                    a bias and so the chain rule is only needed to be applied once.
                </p>
                <h1>Loss function</h1>
                <p>
                    As backpropgation calculates the derivative of the weights with respect to the loss function,
                    then we must define a loss function. In VisualBackprop we use the mean squared error loss.
                </p>
                <p align="center">
                    L = (1 / 2) &sum; (A - t)<sup>2</sup>
                </p>
                <p>
                    That is the sum of the squared differences for each
                </p>
                <h1>Backpropgating with sigmoid</h1>
                <p>Let sigmoid(x) = 1 / (1 + exp(-x))</p>
                <p>Then the derivative of this would be sigmoid(x)(1 - sigmoid(x))</p>
                <p>
                    Then the equation that defines our network will be A = sigmoid(wx) where w is the weight.
                    And so by applying the chain rule we have,
                </p>
                <p>
                    dL/dw = (A - t)A(1 - A)x
                </p>
                <p>
                    = (sigmoid(wx) - t)(sigmoid(wx))(1-sigmoid(wx))x
                </p>
                <p>
                    In which t is our "target" y value. This equation is represented by the green
                    line. As we ultimately want to be tuning our weights such that the activation function
                    passes this target y value, then what we want is to minimize our loss. To achieve this,
                     we need to decide whether we want to increase or decrease our weights and to make
                    this decision we calculate the gradient (through backpropagation).

                    Intuitively, dL/dw is the change in loss based on the change in the weights.
                    What defines a good "weight" would be one that does not allow this loss to change too
                    drastically too quickly.
                </p>
                <p>
                    I invite you to have a play around with shifting the weights until your activation function
                    passed through your target point. What you will realise is that dL/dw will become constant.
                    You will also realise that when the gradient of dL/dw is positive (we can tell by noting the direction
                    of the line), then to we will need to decrease our weight.
                    Similar applies for when this gradient is negative. Why is this?
                </p>
                <h1>Backpropagating with Tanh</h1>
                <p>
                    Similarly, with tanh, the derivative of that would be (1 - tanh(x)<sup>2</sup>).
                    By letting A = tanh(wx) and applying the chain rule we have,
                </p>
                <p>
                    dL/dw = (A - t)(1 - A<sup>2</sup>)x
                </p>
            </div>
        </div>
    )
}

export default About;