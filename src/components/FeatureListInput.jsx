import React, { useState } from 'react';
import {
  Input,
  Button,
  ListGroup,
  ListGroupItem,
  Badge,
  FormGroup,
  Label
} from 'reactstrap';

const FeatureListInput = ({ onChange,previous_features=[] }) => {
  const [features, setFeatures] = useState(previous_features);
  const [currentFeature, setCurrentFeature] = useState('');

  const handleAddFeature = () => {
    if (currentFeature.trim()) {
      const newFeatures = [...features, currentFeature.trim()];
      setFeatures(newFeatures);
      setCurrentFeature('');
      onChange?.(newFeatures); // Notify parent of change
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddFeature();
    }
  };

  const removeFeature = (index) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures);
    onChange?.(newFeatures); // Notify parent of change
  };

  return (
    <div className="w-full max-w-md">
      <FormGroup>
        <Label for="featureInput" className="mb-2">
          Features
        </Label>
        
        <div className="gap-2 mb-3">
          <Input
            id="featureInput"
            type="text"
            value={currentFeature}
            onChange={(e) => setCurrentFeature(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a feature..."
          />
          <Button 
            color="primary"
            onClick={handleAddFeature}
          >
            + Add
          </Button>
        </div>

        <ListGroup>
          {features.map((feature, index) => (
            <ListGroupItem 
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {feature}
              <Button
                close
                onClick={() => removeFeature(index)}
                aria-label="Remove feature"
              />
            </ListGroupItem>
          ))}
        </ListGroup>

        {features.length > 0 && (
          <div className="mt-2">
            <Badge color="secondary">
              {features.length} feature{features.length !== 1 ? 's' : ''} added
            </Badge>
          </div>
        )}
      </FormGroup>
    </div>
  );
};

export default FeatureListInput;